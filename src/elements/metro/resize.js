import magic from '@standard/magic'
import middleware from '@standard/middleware'
import override from '@standard/override'

const resize = middleware(function (metro) {
  const { didMount, willUnmount } = magic
  const event = 'resize'
  const rewind = () => metro.rewind()

  override(metro, didMount, (args, next) => (
    window.addEventListener(event, rewind),
    next(...args)
  ))

  override(metro, willUnmount, (args, next) => (
    window.removeEventListener(event, rewind),
    next(...args)
  ))
})

export default resize
