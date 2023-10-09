import h from '@standard/h'
import text from '@elements/text'

function component (user) {
  return (
    <text.Span master dark xxs highlight bold>{user.name}</text.Span>
  )
}

export default component
