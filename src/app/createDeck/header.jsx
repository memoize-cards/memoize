import h from '@standard/h'
import stack from '@elements/stack'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <header>
      <stack.HGroup column nano>
        <text.H1 master dark highlight sm bold>{translate.title}</text.H1>
        <text.H2 master xxxs>{translate.description}</text.H2>
      </stack.HGroup>
    </header>
  )
}

export default component
