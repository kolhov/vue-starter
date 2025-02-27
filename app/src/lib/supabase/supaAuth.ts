import {supabase} from "@/lib/supabase/supabaseClient.ts";
import type {loginForm, registerForm} from "@/types/auth.types.ts";
import {useAuthStore} from "@/stores/authStore.ts";

const authStore = useAuthStore();

export async function register(formData: registerForm){
  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
  })

  if (error) return  console.log("Signup err: ", error);

  if (data.user) {
    const {error} = await supabase.from('profiles').insert({
      id: data.user.id,
      username: formData.username,
      full_name: formData.firstName + " " + formData.lastName,
      bio: ''
    })

    if (error) return console.log('Profiles err: ', error)
  }

  await authStore.setAuth(data.session);
  return true
}

export async function login(formData: loginForm){
  const {data, error} = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password
  })

  if(error) return console.log(error)

  await authStore.setAuth(data.session);
  return true
}
