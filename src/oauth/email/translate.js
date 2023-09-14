import i18n from '@standard/i18n'
import lang from '@standard/lang'

const dictionary = {
  label: {
    [lang.EN]: 'Email',
    [lang.ES]: 'Correo electrónico',
    [lang.PT]: 'E-mail'
  },
  pattern: {
    [lang.EN]: 'Invalid Email',
    [lang.ES]: 'Correo electrónico no válido',
    [lang.PT]: 'E-mail inválido'
  },
  required: {
    [lang.EN]: 'Email is required',
    [lang.ES]: 'El correo electrónico es obligatorio',
    [lang.PT]: 'E-mail é obrigatório'
  }
}

export default i18n(dictionary)
