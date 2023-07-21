import Caption from '@components/carousel/caption'
import h, { Fragment } from '@standard/h'
import style from './style'
import Thumbnail from '@components/carousel/thumbnail'

function component (props) {
  return (
    <section className={style.card}>
      <Thumbnail theme={props.discipline}>
        <Fragment slot='discipline'>{props.discipline}</Fragment>
        <Fragment slot='professor'>{props.professor}</Fragment>
      </Thumbnail>
      <Caption>
        <Fragment slot='discipline'>{props.discipline}</Fragment>
        <Fragment slot='professor'>{props.professor}</Fragment>
      </Caption>
    </section>
  )
}

export default component
