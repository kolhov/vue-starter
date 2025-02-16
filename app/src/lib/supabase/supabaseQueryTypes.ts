import type {QueryData} from "@supabase/supabase-js";
import {projectsQuery, tasksWithProjectsQuery} from "@/lib/supabase/supabaseQueries.ts";

export type TasksWithProjects = QueryData<typeof tasksWithProjectsQuery>;
export type Projects = QueryData<typeof projectsQuery>;
