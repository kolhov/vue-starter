import {supabase} from "@/lib/supabase/supabaseClient.ts";

export const tasksWithProjectsQuery = supabase
  .from('tasks')
  .select(`
  *,
  projects(
    id,
    name,
    slug
    )
  `);

export const projectsQuery = supabase
  .from('projects')
  .select();

export const projectQuery = (slug: string) => supabase
  .from('projects')
  .select(`
  *,
  tasks(
    id,
    name,
    status,
    due_date
  )`)
  .eq('slug', slug)
  .single();

