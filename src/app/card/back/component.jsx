import { position } from '@app/card/flip'
import Content from './content'
import Footer from './footer'
import global from '@standard/global'
import h, { Fragment } from '@standard/h'
import Main from './main'
import Tag from '@elements/tag'

function component () {
  return (
    <Fragment slot={position.BACK}>
      <Main>
        <Content>
          <Tag info>{global.type}</Tag>
          <m-markdown>{global.back}</m-markdown>
        </Content>
      </Main>
      <Footer />
    </Fragment>
  )
}

export default component
