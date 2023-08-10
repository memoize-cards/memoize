import { urlFor } from '@standard/router'
import h from '@standard/h'
import Link from '@elements/link'
import style from './style'

function component () {
  return (
    <Link className={style.login__forgotPassword} href={urlFor('forgotPassword')}>Forgot password</Link>
  )
}

export default component
