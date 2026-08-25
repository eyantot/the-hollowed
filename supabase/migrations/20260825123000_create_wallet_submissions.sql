create table if not exists public.wallet_submissions (
  id bigint generated always as identity primary key,
  wallet_address text not null,
  chain text not null default 'ethereum',
  proof_url text not null,
  status text not null default 'pending',
  submitted_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  constraint wallet_submissions_wallet_address_key unique (wallet_address),
  constraint wallet_submissions_wallet_address_not_blank check (length(trim(wallet_address)) > 0),
  constraint wallet_submissions_proof_url_not_blank check (length(trim(proof_url)) > 0),
  constraint wallet_submissions_chain_check check (chain = 'ethereum'),
  constraint wallet_submissions_status_check check (status = 'pending')
);

alter table public.wallet_submissions enable row level security;

-- Inserts are performed only by the Edge Function using the service-role key.
