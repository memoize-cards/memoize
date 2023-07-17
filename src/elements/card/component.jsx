import divisor from './divisor.svg'
import h from '@standard/h'
import style from './style'

function component () {
  return (
    <section className={style.card}>
      <div className={style.card__thumbnail}>
        <span className={style.card__discipline}>Como refinar paragrafo de desenvolvimento!</span>
        <img src={divisor} lazy='loading' />
        <span className={style.card__teacher}>Prof. Heittor Ferreira</span>
      </div>
      <div className={style.card__caption}>
        <span className={style.card__discipline}>Como refinar paragrafo de desenvolvimento!</span>
        <span className={style.card__teacher}>Prof. Heittor Ferreira</span>
      </div>
    </section>
  )
}

export default component
