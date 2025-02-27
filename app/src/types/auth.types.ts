export interface loginForm {
  email: string,
  password: string
}

export interface registerForm extends loginForm{
  username: string,
  firstName: string,
  lastName: string,
  confirmPassword: string,
}
