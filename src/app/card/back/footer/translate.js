import i18n from '@standard/i18n'
import lang from '@standard/lang'

const dictionary = {
  again: {
    [lang.EN]: 'No',
    [lang.ES]: 'No',
    [lang.PT]: 'No'
  },
  easy: {
    [lang.EN]: 'Yes',
    [lang.ES]: 'Yes',
    [lang.PT]: 'Yes'
  },
  good: {
    [lang.EN]: 'With Effort',
    [lang.ES]: 'With Effort',
    [lang.PT]: 'With Effort'
  },
  hard: {
    [lang.EN]: 'Partially',
    [lang.ES]: 'Partially',
    [lang.PT]: 'Partially'
  },
  title: {
    [lang.EN]: 'Did you remember?',
    [lang.ES]: 'Did you remember?',
    [lang.PT]: 'Did you remember?'
  }
}

export default i18n(dictionary)
