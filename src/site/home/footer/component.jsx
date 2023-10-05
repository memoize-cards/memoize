import Copywriter from './copywriter'
import Github from './github'
import h from '@standard/h'
import Linkedin from './linkedin'
import PrivacyPolicy from './privacyPolicy'
import style from './style'
import TermsOfUse from './termsOfUse'

function component () {
  return (
    <div className={style.footer}>
      <PrivacyPolicy />
      <TermsOfUse />
      <Copywriter />
      <Github />
      <Linkedin />
    </div>
  )
}

export default component
