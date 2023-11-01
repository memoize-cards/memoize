import CreateDeck from './createDeck'
import h from '@standard/h'
import style from './style'

function component () {
  return (
    <footer className={style.footer}>
      <CreateDeck />
    </footer>
  )
}

export default component
