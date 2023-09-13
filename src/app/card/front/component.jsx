import { position } from '@app/card/flip'
import Content from './content'
import Footer from './footer'
import global from '@standard/global'
import h, { Fragment } from '@standard/h'
import Main from './main'
import Tag from '@elements/tag'
import text from '@elements/text'

function component () {
  return (
    <Fragment slot={position.FRONT}>
      <Main>
        <Content>
          <Tag info>{global.type}</Tag>
          <text.Pre master dark md medium>{global.front}</text.Pre>
        </Content>
      </Main>
      <Footer />
    </Fragment>
  )
}

export default component
