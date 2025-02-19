<script setup lang="ts">
import {Button} from "@/components/ui/button"
import {Icon} from "@iconify/vue";
import {useRouter} from "vue-router";
import {useErrorStore} from "@/stores/errorStore.ts";
import {ref} from "vue";

const errorStore = useErrorStore();
const error = ref(errorStore.activeError);
const message = ref('');
const customCode = ref(0);
const statusCode = ref(0);
const hint = ref('');
const details = ref('');
const code = ref('');


if (error.value && !('code' in error.value)){
  message.value = error.value.message;
  customCode.value = error.value.customCode ?? 0;
}
if (error.value && ('code' in error.value)){
  message.value = error.value.message;
  statusCode.value = error.value.statusCode ?? 0;
  hint.value = error.value.hint;
  details.value = error.value.details;
  code.value = error.value.code;
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
	      <h1 class="error__code">{{ customCode || statusCode }}</h1>
	      <p v-if="code" class="error__code">{{ code }}</p>
	      <p class="error__msg">{{ message }}</p>
	      <p v-if="hint" class="">{{ hint }}</p>
	      <p v-if="details" class="">{{ details }}</p>
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
