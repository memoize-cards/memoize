import divisor from './divisor.svg'
import h from '@standard/h'
import style from './style'

function component () {
  return (
    <section className={style.card}>
      <div className={style.card__poster}>
        <h1 className={style.card__discipline}>Como refinar paragrafo de desenvolvimento!</h1>
        <img src={divisor} lazy='loading' />
        <p className={style.card__teacher}>Heittor Ferreira</p>
      </div>
    </section>
  )
}

export default component
