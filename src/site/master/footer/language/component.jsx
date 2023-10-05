import * as f from '@standard/f'
import h from '@standard/h'
import icon from '@elements/icon'
import lang from '@standard/lang'
import style from './style'

function component () {
  return (
    <button className={style.language}>
      <icon.Language />
      <select className={style.language__select} onChange={(e) => location.reload(lang.value = e.target.value)}>
        <option className={style.language__option} value={lang.EN} selected={f.equals(lang.EN, lang.value)}>EN</option>
        <option className={style.language__option} value={lang.ES} selected={f.equals(lang.ES, lang.value)}>ES</option>
        <option className={style.language__option} value={lang.PT} selected={f.equals(lang.PT, lang.value)}>PT</option>
      </select>
    </button>
  )
}

export default component
