import h from '@standard/h'
import text from '@elements/text'

function component (_props, children) {
  return (
    <text.H1 master dark highlight md bold center>{children}</text.H1>
  )
}

export default component
