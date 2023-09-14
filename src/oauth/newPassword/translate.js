import i18n from '@standard/i18n'
import lang from '@standard/lang'

const dictionary = {
  label: {
    [lang.EN]: 'New password',
    [lang.ES]: 'Nueva contraseña',
    [lang.PT]: 'Nova senha'
  },
  supporting: {
    [lang.EN]: 'Your new password must be more than 8 characters',
    [lang.ES]: 'Tu nueva contraseña debe tener más de 8 caracteres',
    [lang.PT]: 'Sua nova senha deve ter mais de 8 caracteres'
  }
}

export default i18n(dictionary)
