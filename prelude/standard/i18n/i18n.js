import lang from '@standard/lang'

function i18n (descriptor) {
  return new Proxy({}, {
    get: (_, key) => (descriptor[key][lang.value] ?? descriptor[key][lang.EN])
  })
}

export default i18n
