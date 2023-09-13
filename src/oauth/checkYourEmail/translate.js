import i18n from '@standard/i18n'
import lang from '@standard/lang'

const dictionary = {
  clickToResend: {
    [lang.EN]: 'Click to resend',
    [lang.ES]: 'Haga clic para reenviar',
    [lang.PT]: 'Clique para reenviar'
  },
  description: {
    [lang.EN]: 'We sent a password reset link to',
    [lang.ES]: 'Hemos enviado un enlace para restablecer la contraseña a',
    [lang.PT]: 'Enviamos um link para redefinir a senha para'
  },
  footer: {
    [lang.EN]: "Didn't receive the email?",
    [lang.ES]: '¿No recibió el correo electrónico?',
    [lang.PT]: 'Não recebeu o email?'
  },
  logIn: {
    [lang.EN]: 'Back to log in',
    [lang.ES]: 'Volver a iniciar sesión',
    [lang.PT]: 'Voltar para fazer login'
  },
  openEmailApp: {
    [lang.EN]: 'Open email app',
    [lang.ES]: 'Abrir la aplicación de correo electrónico',
    [lang.PT]: 'Abrir o aplicativo de e-mail'
  },
  title: {
    [lang.EN]: 'Check your email?',
    [lang.ES]: '¿Verificar su correo electrónico?',
    [lang.PT]: 'Verifique seu e-mail?'
  }
}

export default i18n(dictionary)
