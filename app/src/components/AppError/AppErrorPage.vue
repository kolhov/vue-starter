<script setup lang="ts">
import {Button} from "@/components/ui/button"
import {Icon} from "@iconify/vue";
import {useRouter} from "vue-router";
import {useErrorStore} from "@/stores/error.ts";
import {ref} from "vue";

const errorStore = useErrorStore();
const error = ref(errorStore.activeError);
const message = ref('');
const customCode = ref(0);

if (error.value){
  message.value = error.value.message;
  customCode.value = error.value.customCode ?? 0;
}

const router = useRouter();
router.afterEach(() => {
  errorStore.activeError = null;
})
</script>

<template>
	<section class="error">
	    <div>
	      <icon icon="lucide:triangle-alert" class="error__icon text-center w-full" />
	      <h1 class="error__code">{{ customCode }}</h1>
	      <p class="error__msg">{{ message }}</p>
	      <div class="error-footer">
	        <p class="error-footer__text">You'll find lots to explore on the home page.</p>
	        <RouterLink to="/">
	          <Button class="max-w-36"> Back to homepage </Button>
	        </RouterLink>
	      </div>
	    </div>
	  </section>
</template>

<style scoped>
.error {
  @apply mx-auto flex justify-center items-center flex-1 p-10 text-center -mt-20 min-h-[90vh];
}
.error__icon {
  @apply text-7xl text-destructive;
}
.error__code {
  @apply font-extrabold text-7xl text-secondary;
}
.error__msg {
  @apply text-3xl font-extrabold text-primary;
}
.error-footer {
  @apply flex flex-col items-center justify-center gap-5 mt-6 font-light;
}
.error-footer__text {
  @apply text-lg text-muted-foreground;
}
p {
  @apply my-2;
}
</style>
