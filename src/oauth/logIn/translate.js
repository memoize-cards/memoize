import i18n from '@standard/i18n'
import lang from '@standard/lang'

const dictionary = {
  description: {
    [lang.EN]: 'Welcome back! Please enter your details',
    [lang.ES]: '¡Bienvenido de nuevo! Por favor, ingrese sus detalles',
    [lang.PT]: 'Bem-vindo de volta! Por favor, insira seus detalhes'
  },
  footer: {
    [lang.EN]: "Don't have an account?",
    [lang.ES]: '¿No tienes una cuenta?',
    [lang.PT]: 'Não tem uma conta?'
  },
  forgotPassword: {
    [lang.EN]: 'Forgot password',
    [lang.ES]: '¿Olvidaste la contraseña?',
    [lang.PT]: 'Esqueceu a senha?'
  },
  title: {
    [lang.EN]: 'Log in to your account',
    [lang.ES]: 'Inicia sesión en tu cuenta',
    [lang.PT]: 'Faça login na sua conta'
  },
  signIn: {
    [lang.EN]: 'Sign in',
    [lang.ES]: 'Iniciar sesión',
    [lang.PT]: 'Entrar'
  },
  signUp: {
    [lang.EN]: 'Sign up',
    [lang.ES]: 'Registrarse',
    [lang.PT]: 'Registrar-se'
  }
}

export default i18n(dictionary)
