import magic from '@standard/magic'

function render (node, element) {
  node.append(element[render.flow]())
}

Object.assign(render, {
  flow: magic.render_flow
})

export default render
