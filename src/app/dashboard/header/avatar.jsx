import Avatar from '@elements/avatar'
import cookie from '@standard/cookie'
import h from '@standard/h'

function component () {
  return (
    <Avatar src={cookie.avatar} large />
  )
}

export default component
