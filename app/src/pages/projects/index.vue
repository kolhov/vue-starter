<script setup lang="ts">
import { supabase } from "@/lib/supabaseClient.ts";
import {type Ref, ref} from "vue";
import type { Tables } from "@/types/database.types.ts";

const projects: Ref<Tables<'projects'>[] | null> = ref(null);

( async () => {
  const {data, error} = await supabase.from('projects').select();

  if (error) console.log(error);
  projects.value = data;
})();
</script>

<template>
  <RouterLink to="/">To Home</RouterLink>
  <ul>
    <li v-for="project in projects" :key="project.id">
      {{ project.name }}
    </li>
  </ul>
</template>

<style scoped>

</style>
