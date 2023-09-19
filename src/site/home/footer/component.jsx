import Container from './container'
import GetStarted from './getStarted'
import h from '@standard/h'
import PrivacyPolicy from './privacyPolicy'
import stack from '@elements/stack'
import TermsOfUse from './termsOfUse'

function component () {
  return (
    <Container>
      <GetStarted />
      <stack.Div center xs>
        <PrivacyPolicy />
        <TermsOfUse />
      </stack.Div>
    </Container>
  )
}

export default component
