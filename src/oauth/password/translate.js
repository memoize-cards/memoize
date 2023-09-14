import i18n from '@standard/i18n'
import lang from '@standard/lang'

const dictionary = {
  label: {
    [lang.EN]: 'Password',
    [lang.ES]: 'Contraseña',
    [lang.PT]: 'Senha'
  },
  required: {
    [lang.EN]: 'Password is required',
    [lang.ES]: 'La contraseña es obligatoria',
    [lang.PT]: 'Senha é obrigatória'
  },
  supporting: {
    [lang.EN]: 'Must be at least 8 characters',
    [lang.ES]: 'Debe tener al menos 8 caracteres',
    [lang.PT]: 'Deve ter pelo menos 8 caracteres'
  }
}

export default i18n(dictionary)
