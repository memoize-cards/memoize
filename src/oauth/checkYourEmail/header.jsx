import Email from './email'
import h from '@standard/h'
import Logo from '@elements/logo'
import stack from '@elements/stack'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <stack.Header column center giant>
      <Logo large />
      <stack.HGroup column center quarck>
        <text.H1 master dark highlight sm bold>{translate.title}</text.H1>
        <text.H2 master xxxs center>
          {translate.description}<br />
          <Email />
        </text.H2>
      </stack.HGroup>
    </stack.Header>
  )
}

export default component
