-- 1.1 role column -----------------------------------------------------
alter table public.users
  add column if not exists role text default 'user' check (role in ('user','admin'));

-- 1.2 user_id FK on visa_applications (== bookings) -------------------
alter table public.visa_applications
  add column if not exists user_id uuid references public.users(id);

update public.visa_applications va
set    user_id = u.id
from   public.users u
where  va.email = u.email and va.user_id is null;

-- 1.3 Invoices table --------------------------------------------------
create table if not exists public.invoices (
  id         uuid primary key default gen_random_uuid(),
  booking_id uuid references public.visa_applications(id) on delete cascade,
  pdf_url    text,
  amount     int,
  status     text,
  issued_at  timestamptz default now()
);

-- 1.4 RLS -------------------------------------------------------------
alter table public.visa_applications enable row level security;
alter table public.invoices         enable row level security;

create policy "users:own bookings" on public.visa_applications
  for select using (auth.uid() = user_id);

create policy "users:own invoices" on public.invoices
  for select using (
    exists(select 1 from public.visa_applications b
           where b.id = invoices.booking_id and b.user_id = auth.uid())
  );