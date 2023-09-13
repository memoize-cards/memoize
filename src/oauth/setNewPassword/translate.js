import i18n from '@standard/i18n'
import lang from '@standard/lang'

const dictionary = {
  description: {
    [lang.EN]: 'Your new password must be different from previously used passwords',
    [lang.ES]: 'Su nueva contraseña debe ser diferente de las contraseñas utilizadas anteriormente',
    [lang.PT]: 'Sua nova senha deve ser diferente das senhas anteriormente utilizadas'
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
    [lang.EN]: 'Set new password',
    [lang.ES]: 'Establecer nueva contraseña',
    [lang.PT]: 'Definir nova senha'
  }
}

export default i18n(dictionary)
