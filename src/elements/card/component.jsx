import Caption from '@elements/caption'
import h, { Fragment } from '@standard/h'
import style from './style'
import Thumbnail from '@elements/thumbnail'

function component () {
  return (
    <section className={style.card}>
      <Thumbnail>
        <Fragment slot='discipline'>Como refinar paragrafo de desenvolvimento!</Fragment>
        <Fragment slot='teacher'>Heittor Ferreira</Fragment>
      </Thumbnail>
      <Caption>
        <Fragment slot='discipline'>Como refinar paragrafo de desenvolvimento!</Fragment>
        <Fragment slot='teacher'>Heittor Ferreira</Fragment>
      </Caption>
    </section>
  )
}

export default component
