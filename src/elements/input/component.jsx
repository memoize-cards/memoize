import h from '@standard/h'
import Show from '@directive/show'
import style from './style'
import text from '@elements/text'

function component (props, children) {
  return (
    <div className={[style.input__container, props.className]}>
      <text.Label master dark xxs medium for={props.id}>{children.label}</text.Label>
      <input {...props} className={style.input} autocomplete='off' />
      <Show when={children.supporting}>{children.supporting}</Show>
    </div>
  )
}

export default component
