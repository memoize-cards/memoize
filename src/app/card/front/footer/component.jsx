import Button from '@elements/button'
import h from '@standard/h'
import hook from '@standard/hook'
import style from './style'
import translate from './translate'

function component () {
  return (
    <footer className={style.footer}>
      <Button onClick={() => hook.reveal()} wide>{translate.reveal}</Button>
    </footer>
  )
}

export default component
