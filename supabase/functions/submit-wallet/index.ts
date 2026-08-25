import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Content-Type': 'application/json',
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: corsHeaders,
  })
}

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  if (request.method !== 'POST') return json({ error: 'POST requests only' }, 405)

  let payload: { wallet_address?: unknown; proof_url?: unknown }
  try {
    payload = await request.json()
  } catch {
    return json({ error: 'Request body must be valid JSON' }, 400)
  }

  const walletAddress = typeof payload.wallet_address === 'string' ? payload.wallet_address.trim() : ''
  const proofUrl = typeof payload.proof_url === 'string' ? payload.proof_url.trim() : ''
  if (!/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
    return json({ error: 'Invalid Ethereum wallet address' }, 400)
  }

  try {
    const proof = new URL(proofUrl)
    if (
      proof.protocol !== 'https:' ||
      !['x.com', 'www.x.com', 'twitter.com', 'www.twitter.com'].includes(proof.hostname)
    ) {
      throw new Error()
    }
  } catch {
    return json({ error: 'A valid X comment URL is required' }, 400)
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  let projectSecretKey: string | undefined
  try {
    const secretKeys = JSON.parse(Deno.env.get('SUPABASE_SECRET_KEYS') ?? '{}')
    projectSecretKey = secretKeys.default
  } catch {
    console.error('SUPABASE_SECRET_KEYS is not valid JSON')
  }

  // Supabase makes this server-only secret-key map available to every hosted
  // Edge Function. WALLET_DB_KEY remains a fallback for older projects.
  const serviceRoleKey = projectSecretKey ??
    Deno.env.get('WALLET_DB_KEY') ??
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  if (!supabaseUrl || !serviceRoleKey) {
    console.error('Supabase service-role environment variables are not configured')
    return json({ error: 'Server configuration error' }, 500)
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  })
  const { error } = await supabase.from('wallet_submissions').insert({
    wallet_address: walletAddress,
    chain: 'ethereum',
    proof_url: proofUrl,
    status: 'pending',
  })

  if (error?.code === '23505') return json({ error: 'This wallet was already submitted' }, 409)
  if (error) {
    console.error('Failed to create wallet submission', error)
    return json({ error: 'Could not save wallet submission' }, 500)
  }

  return json({ success: true }, 201)
})
