-- =============================================
-- Supabase SQL Schema — ซินแสหวาง Website
-- วิธีใช้: ไปที่ supabase.com → Project → SQL Editor → วาง Script นี้ → Run
-- =============================================

-- 1. ARTICLES TABLE
create table if not exists articles (
  id          bigserial primary key,
  title       text        not null,
  cat         text        not null default 'Uncategorized',
  status      text        not null default 'แบบร่าง' check (status in ('เผยแพร่', 'แบบร่าง')),
  content     text        not null default '',
  excerpt     text                 default '',
  meta_desc   text                 default '',
  keywords    text                 default '',
  image       text                 default '',
  author      text        not null default 'ซินแสหวาง',
  date        text                 default '',
  date_iso    date,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz
);

create index if not exists idx_articles_status on articles(status);
create index if not exists idx_articles_cat    on articles(cat);
create index if not exists idx_articles_date   on articles(created_at desc);

-- 2. CATEGORIES TABLE
create table if not exists categories (
  id    serial primary key,
  name  text   not null unique,
  icon  text   not null default '文'
);

insert into categories (name, icon) values
  ('โหราศาสตร์จีน', '八'),
  ('โหราศาสตร์ไทย', '🌙'),
  ('อี้จิง',        '☯'),
  ('ฮวงจุ้ย',       '🏮'),
  ('คู่สีมงคล',     '🎨'),
  ('ราศีจีน',       '🐉')
on conflict (name) do nothing;

-- 3. HOMEPAGE TABLE
create table if not exists homepage (
  id         int  primary key default 1,
  content    jsonb not null default '{}',
  updated_at timestamptz default now(),
  constraint homepage_single_row check (id = 1)
);

-- =============================================
-- Row Level Security
-- =============================================
alter table articles   enable row level security;
alter table categories enable row level security;
alter table homepage   enable row level security;

create policy "Public read articles"   on articles   for select using (true);
create policy "Public read categories" on categories for select using (true);
create policy "Public read homepage"   on homepage   for select using (true);

-- =============================================
-- Storage Bucket (run in SQL Editor)
-- =============================================
insert into storage.buckets (id, name, public)
values ('blog-covers', 'blog-covers', true)
on conflict (id) do nothing;

create policy "Public read blog-covers"
  on storage.objects for select
  using (bucket_id = 'blog-covers');

create policy "Service role upload blog-covers"
  on storage.objects for insert
  with check (bucket_id = 'blog-covers');
