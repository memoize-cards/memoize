import { render } from '@standard/h'

async function renderer (element) {
  return (await element)[render.flow]?.()
}

export default renderer
