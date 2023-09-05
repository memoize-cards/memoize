import i18n from '@standard/i18n'
import lang from '@standard/lang'

const dictionary = {
  again: {
    [lang.EN]: 'Forgot',
    [lang.ES]: 'Forgot',
    [lang.PT]: 'Forgot'
  },
  easy: {
    [lang.EN]: 'Recalled Easily',
    [lang.ES]: 'Recalled Easily',
    [lang.PT]: 'Recalled Easily'
  },
  good: {
    [lang.EN]: 'Recalled with Effort',
    [lang.ES]: 'Recalled with Effort',
    [lang.PT]: 'Recalled with Effort'
  },
  hard: {
    [lang.EN]: 'Partially Remembered',
    [lang.ES]: 'Partially Remembered',
    [lang.PT]: 'Partially Remembered'
  },
  title: {
    [lang.EN]: 'Did you remember the answer?',
    [lang.ES]: 'Did you remember the answer?',
    [lang.PT]: 'Did you remember the answer?'
  }
}

export default i18n(dictionary)
