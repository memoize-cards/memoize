import classSelectorRegex from './classSelectorRegex'
import generateHash from './generateHash'

function transformCSS (css) {
  const classMap = {}
  const transformedCSS = css.replace(classSelectorRegex, (className) => {
    const key = className.slice(1)
    const value = Reflect.get(classMap, key) ?? generateHash()
    Reflect.set(classMap, key, value)
    return `.${value}`
  })

  return {
    classMap,
    transformedCSS
  }
}

export default transformCSS
