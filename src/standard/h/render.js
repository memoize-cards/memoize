import magic from '@standard/magic'

async function render (node, element) {
  node.append((await element)[render.flow]())
}

Object.assign(render, {
  flow: magic.render_flow
})

export default render
