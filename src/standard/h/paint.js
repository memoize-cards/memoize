import magic from '@standard/magic'
import render from './render'
import repaint from './repaint'

/**
 * The paint function is a decorator that creates a proxy for a component class or function,
 * allowing for manipulation of virtual DOM rendering and updates.
 *
 * @param {Function} component - The component function that returns a virtual DOM element.
 * @returns {Function} A new proxy function wrapping the original component function or class.
 */
function paint (component) {
  return (Klass) =>
    new Proxy(
      function (props, children) {
        const instance = (this instanceof Klass)
          ? new Klass(...arguments)
          : new Klass(props)

        const rootAST = component(instance, children)

        /**
         * Attach various functions and properties to the instance and rootAST objects
         * to enable virtual DOM rendering and updates.
         */
        Object.assign(instance, {
          [paint.rootAST]: () => rootAST,
          [paint.rootElement]: () => rootAST.__node__,
          [render.flow]: () => rootAST[render.flow](),
          [repaint.reflow]: () => rootAST[repaint.reflow](component(instance, children))
        })

        Object.assign(rootAST, {
          [paint.instance]: () => instance
        })

        /**
         * Return either the instance or rootAST object based on the context of the function call.
         */
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

/**
 * Symbolic constants used for identifying special properties in the decorated objects.
 */
Object.assign(paint, {
  rootAST: magic.paint_rootAST,
  instance: magic.paint_instance,
  rootElement: magic.paint_rootElement
})

export default paint
