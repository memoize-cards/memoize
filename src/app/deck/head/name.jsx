import global from '@standard/global'
import h from '@standard/h'
import text from '@elements/text'

function component () {
  return (
    <text.H1 master dark highlight sm bold>{global.name}</text.H1>
  )
}

export default component
