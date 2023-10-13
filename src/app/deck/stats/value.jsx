import h from '@standard/h'
import text from '@elements/text'

function component (_props, children) {
  return (
    <text.Span master dark highlight sm bold>{children}</text.Span>
  )
}

export default component
