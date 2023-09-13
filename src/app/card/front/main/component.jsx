import global from '@standard/global'
import h from '@standard/h'
import style from './style'
import Tag from '@elements/tag'
import text from '@elements/text'

function component () {
  return (
    <main className={style.main}>
      <div className={style.main__content}>
        <Tag info>{global.type}</Tag>
        <text.Pre master dark md medium>{global.front}</text.Pre>
      </div>
    </main>
  )
}

export default component
