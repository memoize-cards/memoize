import h from '@standard/h'
import icon from '@elements/icon'
import lang from '@standard/lang'
import style from './style'

function component () {
  return (
    <button className={style.language}>
      <icon.Language />
      <select className={style.language__select} onChange={(e) => (lang.value = e.target.value)}>
        <option className={style.language__option} value={lang.EN}>EN</option>
        <option className={style.language__option} value={lang.ES}>ES</option>
        <option className={style.language__option} value={lang.PT}>PT</option>
      </select>
    </button>
  )
}

export default component
