import i18n from '@standard/i18n'
import lang from '@standard/lang'

const dictionary = {
  continue: {
    [lang.EN]: 'Continue',
    [lang.ES]: 'Continuar',
    [lang.PT]: 'Continuar'
  },
  description: {
    [lang.EN]: 'Your password has been successfully reset. Click below to log in magically',
    [lang.ES]: 'Su contraseña se ha restablecido correctamente. Haga clic abajo para iniciar sesión de manera mágica',
    [lang.PT]: 'Sua senha foi redefinida com sucesso. Clique abaixo para fazer login de forma mágica'
  },
  logIn: {
    [lang.EN]: 'Back to log in',
    [lang.ES]: 'Volver a iniciar sesión',
    [lang.PT]: 'Voltar para fazer login'
  },
  title: {
    [lang.EN]: 'Passsword reset',
    [lang.ES]: 'Restablecimiento de contraseña',
    [lang.PT]: 'Redefinição de senha'
  }
}

export default i18n(dictionary)
