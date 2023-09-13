import i18n from '@standard/i18n'
import lang from '@standard/lang'

const dictionary = {
  createDeck: {
    [lang.EN]: 'Create deck',
    [lang.ES]: 'Crear mazo',
    [lang.PT]: 'Criar baralho'
  },
  hello: {
    [lang.EN]: "Let's study",
    [lang.ES]: 'Vamos a estudiar',
    [lang.PT]: 'Vamos estudar'
  },
  logOut: {
    [lang.EN]: 'Log out',
    [lang.ES]: 'Cerrar sesión',
    [lang.PT]: 'Sair'
  }
}

export default i18n(dictionary)
