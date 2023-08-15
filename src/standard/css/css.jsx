import h, { render } from '@standard/h'
import minifyCSS from './minifyCSS'
import transformCSS from './transformCss'
import zip from './zip'

function css (strings, ...expressions) {
  const { classMap, transformedCSS } = transformCSS(minifyCSS(zip(strings, expressions)))
  render(document.head, <style>{transformedCSS}</style>)
  return classMap
}

export default css
