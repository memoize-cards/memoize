import Footer from './footer'
import GetStarted from './getStarted'
import h, { Fragment } from '@standard/h'
import Header from './header'
import Main from './main'
import PrivacyPolicy from './privacyPolicy'
import TermsOfUse from './termsOfUse'

function component () {
  return (
    <>
      <Main>
        <Header />
        <GetStarted />
      </Main>
      <Footer>
        <PrivacyPolicy />
        <TermsOfUse />
      </Footer>
    </>
  )
}

export default component
