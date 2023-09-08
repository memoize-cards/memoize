import global from '@standard/global'
import h, { Fragment } from '@standard/h'
import Tag from '@elements/tag'
import text from '@elements/text'

function component () {
  return (
    <Fragment slot='back'>
      <Tag info>{global.type}</Tag>
      <text.Pre master dark md medium>{global.front}</text.Pre>
      <m-markdown>{global.back}</m-markdown>
    </Fragment>
  )
}

export default component
