import {defineStore} from "pinia";
import {ref} from "vue";
import type {CustomError, ExtendedPostgresError} from "@/types/Error.ts";
import type {PostgrestError} from "@supabase/supabase-js";

export const useErrorStore = defineStore('error-store', () => {
  const activeError = ref<CustomError | ExtendedPostgresError | null >(null);

  function setError({error, customCode}: { error: string | PostgrestError, customCode: number }) {
    if (typeof error === 'string') {
      activeError.value = Error(error);
      activeError.value.customCode = customCode;
      return
    }

    activeError.value = error;
    (activeError.value as ExtendedPostgresError ).statusCode = customCode;
  }

  return {
    activeError,
    setError
  }
})
