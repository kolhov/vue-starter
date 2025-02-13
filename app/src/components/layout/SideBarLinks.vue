<script setup lang="ts">
import {Icon} from "@iconify/vue";
import type { LinkProp } from "@/types/sidebar.linkprop.ts";

defineProps<{
  links: LinkProp[],
}>()

</script>

<template>
  <RouterLink
    exact-active-class="text-primary bg-muted"
    v-for="link in links"
    :key="link.title"
    :to="link.to"
    class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary justify-center lg:justify-normal text-muted-foreground"
  >
    <Icon :icon="link.icon"></Icon>
    <span class="hidden lg:block text-nowrap">{{ link.title }}</span>
  </RouterLink>
</template>

