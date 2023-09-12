import h from '@standard/h'
import stack from '@elements/stack'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <stack.Header column center>
      <stack.HGroup column center quarck>
        <text.H1 master dark highlight md bold>{translate.title}</text.H1>
        <text.H2 master dark xxs center>{translate.description}</text.H2>
      </stack.HGroup>
    </stack.Header>
  )
}

export default component
