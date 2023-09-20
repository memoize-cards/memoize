import Front from './front'
import h from '@standard/h'
import style from './style'
import Type from './type'

function component () {
  return (
    <main className={style.main}>
      <div className={style.main__content}>
        <Type />
        <Front />
      </div>
    </main>
  )
}

export default component
