-- Run this migration for projects where the initial wallet_submissions table
-- already exists without the Ethereum submission metadata columns.
alter table public.wallet_submissions
  add column if not exists chain text not null default 'ethereum',
  add column if not exists status text not null default 'pending',
  add column if not exists submitted_at timestamptz not null default now();

alter table public.wallet_submissions
  drop constraint if exists wallet_submissions_chain_check,
  drop constraint if exists wallet_submissions_status_check;

alter table public.wallet_submissions
  add constraint wallet_submissions_chain_check check (chain = 'ethereum'),
  add constraint wallet_submissions_status_check check (status = 'pending');
