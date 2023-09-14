import i18n from '@standard/i18n'
import lang from '@standard/lang'

const dicionario = {
  again: {
    [lang.EN]: 'No',
    [lang.ES]: 'No',
    [lang.PT]: 'Não'
  },
  easy: {
    [lang.EN]: 'Yes',
    [lang.ES]: 'Sí',
    [lang.PT]: 'Sim'
  },
  good: {
    [lang.EN]: 'With Effort',
    [lang.ES]: 'Con Esfuerzo',
    [lang.PT]: 'Com Esforço'
  },
  hard: {
    [lang.EN]: 'Partially',
    [lang.ES]: 'Parcialmente',
    [lang.PT]: 'Parcialmente'
  },
  title: {
    [lang.EN]: 'Did you remember?',
    [lang.ES]: '¿Recuerdas?',
    [lang.PT]: 'Você lembrou?'
  }
}

export default i18n(dicionario)
