import magic from '@standard/magic'
import middleware from '@standard/middleware'
import override from '@standard/override'

const resize = middleware(function (metro) {
  const { didMount, willUnmount } = magic
  const event = 'resize'
  const rewind = () => metro.rewind()
  override(metro, didMount, (_args, next) => (window.addEventListener(event, rewind), next()))
  override(metro, willUnmount, (_args, next) => (window.removeEventListener(event, rewind), next()))
})

export default resize
