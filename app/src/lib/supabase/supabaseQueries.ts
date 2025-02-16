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

