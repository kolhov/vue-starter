import {defineStore} from "pinia";
import {ref} from "vue";
import type {CustomError} from "@/types/Error.ts";

export const useErrorStore = defineStore('error-store', () => {
  const activeError = ref<CustomError | null>(null);

  function setError({error, customCode}: {error: string, customCode: number}){
    activeError.value = Error(error);
    activeError.value.customCode = customCode;
  }

  return {
    activeError,
    setError
  }
})
