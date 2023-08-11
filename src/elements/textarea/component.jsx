import h from '@standard/h'
import Show from '@directive/show'
import style from './style'
import text from '@elements/text'

function component (props, children) {
  return (
    <div className={['textarea__container', props.className]}>
      <text.Label master dark xxs medium for={props.id}>{children.label}</text.Label>
      <textarea {...props} className={style.textarea} autocomplete='off' />
      <Show when={children.supporting}>{props.supporting}</Show>
    </div>
  )
}

export default component
