create table activities (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id) on delete cascade not null,
  candidate_id uuid references candidates(id) on delete cascade not null,
  type text not null check (type in ('note', 'call', 'email', 'meeting', 'status_change')),
  content text,
  created_at timestamptz default now(),
  created_by uuid references auth.users(id)
);

alter table activities enable row level security;

create policy "Enable all access for authenticated users" on activities
    for all
    to authenticated
    using (true)
    with check (true);

create index idx_activities_candidate on activities(candidate_id);
create index idx_activities_project on activities(project_id);
