import Caption from '@components/carousel/caption'
import h, { Fragment } from '@standard/h'
import style from './style'
import Thumbnail, { Avatar } from '@components/carousel/thumbnail'

function component (props) {
  return (
    <div className={style.card} onClick={() => props.redirect()}>
      <Thumbnail theme={props.discipline}>
        <Fragment slot='discipline'>{props.discipline}</Fragment>
        <Fragment slot='professor'>{props.professor}</Fragment>
        <Avatar src={props.avatar} />
      </Thumbnail>
      <Caption>
        <Fragment slot='discipline'>{props.discipline}</Fragment>
        <Fragment slot='professor'>{props.professor}</Fragment>
      </Caption>
    </div>
  )
}

export default component
