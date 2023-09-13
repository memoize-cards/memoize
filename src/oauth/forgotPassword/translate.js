import i18n from '@standard/i18n'
import lang from '@standard/lang'

const dictionary = {
  description: {
    [lang.EN]: "No worries, we'll send you reset instructions",
    [lang.ES]: 'No te preocupes, te enviaremos instrucciones para restablecerla',
    [lang.PT]: 'Não se preocupe, enviaremos instruções de redefinição para você'
  },
  footer: {
    [lang.EN]: 'Already have an account?',
    [lang.ES]: '¿Ya tienes una cuenta?',
    [lang.PT]: 'Já tem uma conta?'
  },
  logIn: {
    [lang.EN]: 'Back to log in',
    [lang.ES]: 'Volver a iniciar sesión',
    [lang.PT]: 'Voltar para fazer login'
  },
  resetPassword: {
    [lang.EN]: 'Reset password',
    [lang.ES]: 'Restablecer contraseña',
    [lang.PT]: 'Redefinir senha'
  },
  title: {
    [lang.EN]: 'Forgot Passsword?',
    [lang.ES]: '¿Olvidaste la contraseña?',
    [lang.PT]: 'Esqueceu a senha?'
  }
}

export default i18n(dictionary)
