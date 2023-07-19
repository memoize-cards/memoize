import echo from '@standard/echo'
import magic from '@standard/magic'
import middleware from '@standard/middleware'

const event = middleware(function (metro) {
  const { didMount, willUnmount } = magic

  let next = () => metro.next()
  let prev = () => metro.prev()

  metro[didMount] = () => (
    echo.on(`next:${metro.id}`, next),
    echo.on(`prev:${metro.id}`, prev)
  )

  metro[willUnmount] = () => (next = prev = () => undefined)
})

export default event
