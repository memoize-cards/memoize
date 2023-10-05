import h from '@standard/h'
import HowItWorks from './howItWorks'
import Language from './language'
import style from './style'

function component () {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <HowItWorks />
        <Language />
      </div>
    </footer>
  )
}

export default component
