import magic from '@standard/magic'
import render from './render'
import repaint from './repaint'

function paint (component) {
  return (Klass) =>
    new Proxy(
      async function (props, children) {
        const instance = (this instanceof Klass)
          ? await new Klass(...arguments)
          : await new Klass(props)

        const rootAST = await component(instance, children)

        Object.assign(instance, {
          [paint.rootAST]: () => rootAST,
          [paint.rootElement]: () => rootAST.__node__,
          [render.flow]: () => rootAST[render.flow](),
          [repaint.reflow]: async () => rootAST[repaint.reflow](await component(instance, children))
        })

        Object.assign(rootAST, {
          [paint.instance]: () => instance
        })

        return (this instanceof Klass)
          ? instance
          : rootAST
      },
      {
        get: (_, key) => Reflect.get(Klass, key),
        set: (_, key, value) => (Reflect.set(Klass, key, value), true)
      }
    )
}

Object.assign(paint, {
  rootAST: magic.paint_rootAST,
  instance: magic.paint_instance,
  rootElement: magic.paint_rootElement
})

export default paint
