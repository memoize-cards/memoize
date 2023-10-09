import CopyWriter from './copyWriter'
import h from '@standard/h'
import Language from './language'
import style from './style'

function component () {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <CopyWriter />
        <Language />
      </div>
    </footer>
  )
}

export default component
