import Caption from '@elements/caption'
import h, { Fragment } from '@standard/h'
import style from './style'
import Thumbnail from '@elements/thumbnail'

function component (props) {
  return (
    <section className={style.card}>
      <Thumbnail>
        <Fragment slot='discipline'>{props.discipline}</Fragment>
        <Fragment slot='teacher'>{props.teacher}</Fragment>
      </Thumbnail>
      <Caption>
        <Fragment slot='discipline'>{props.discipline}</Fragment>
        <Fragment slot='teacher'>{props.teacher}</Fragment>
      </Caption>
    </section>
  )
}

export default component
