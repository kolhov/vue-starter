<script setup lang="ts">
import AuthLayout from "@/components/layout/main/AuthLayout.vue";
import AppErrorPage from "@/components/AppError/AppErrorPage.vue";
import {storeToRefs} from "pinia";
import {useErrorStore} from "@/stores/error.ts";

const {activeError} = storeToRefs(useErrorStore());

</script>

<template>
  <AuthLayout>
    <AppErrorPage v-if="activeError" />
    <RouterView v-else v-slot="{Component, route}">
      <Suspense v-if="Component" :timeout="0">
        <Component :is="Component" :key="route.name"></Component>
        <template #fallback>Loading...</template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>
