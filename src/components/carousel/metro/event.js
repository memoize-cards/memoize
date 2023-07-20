import echo from '@standard/echo'
import magic from '@standard/magic'
import middleware from '@standard/middleware'
import override from '@standard/override'

const event = middleware(function (metro) {
  const { didMount, willUnmount } = magic

  let moveForward = () => metro.moveForward()
  let moveBack = () => metro.moveBack()

  override(metro, didMount, (args, next) => (
    echo.on(`next:${metro.channel}`, moveForward),
    echo.on(`prev:${metro.channel}`, moveBack),
    next(...args)
  ))

  override(metro, willUnmount, (args, next) => (
    moveForward = moveBack = () => undefined,
    next(...args)
  ))
})

export default event
