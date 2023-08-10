import { urlFor } from '@standard/router'
import h from '@standard/h'
import Link from '@elements/link'
import style from './style'
import text from '@elements/text'

function component () {
  return (
    <text.Span className={style.login__signUp} master xxs>Don&apos;t have an account? <Link href={urlFor('signUp')}>Sign up</Link></text.Span>
  )
}

export default component
