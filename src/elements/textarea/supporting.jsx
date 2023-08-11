import h from '@standard/h'
import text from '@elements/text'

function component (props, children) {
  return (
    <text.Span {...props} slot='supporting' master xxxs>{children}</text.Span>
  )
}

export default component
