import echo from '@standard/echo'
import magic from '@standard/magic'
import middleware from '@standard/middleware'
import override from '@standard/override'

const event = middleware(function (metro) {
  const { didMount, willUnmount } = magic

  let next = () => metro.next()
  let prev = () => metro.prev()

  override(metro, didMount, (_args, done) => (
    echo.on(`next:${metro.id}`, next),
    echo.on(`prev:${metro.id}`, prev),
    done()
  ))

  override(metro, willUnmount, (_args, done) => (
    next = prev = () => undefined,
    done()
  ))
})

export default event
