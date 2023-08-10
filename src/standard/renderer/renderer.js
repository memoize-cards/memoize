import { render } from '@standard/h'

function renderer (element) {
  return element[render.flow]?.()
}

export default renderer
