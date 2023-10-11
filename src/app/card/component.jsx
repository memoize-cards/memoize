import Back from './back'
import BackToDeck from '@app/backToDeck'
import Flip from './flip'
import Front from './front'
import h, { Fragment } from '@standard/h'
import Main from './main'
import Master from '@app/master'

function component () {
  return (
    <Master>
      <BackToDeck />
      <Main>
        <Flip>
          <Front />
          <Back />
        </Flip>
      </Main>
    </Master>
  )
}

export default component
