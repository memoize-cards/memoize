import Benefits from './benefits'
import h from '@standard/h'
import HowItWorks from './howItWorks'
import Language from './language'
import style from './style'
import TryItOut from './tryItOut'
import Usage from './usage'

function component () {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <HowItWorks />
        <Usage />
        <Benefits />
        <TryItOut />
        <Language />
      </div>
    </footer>
  )
}

export default component
