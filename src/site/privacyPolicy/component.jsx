import Content from './content.en'
import h, { Fragment } from '@standard/h'
import Header from './header'
import HistoryBack from '@components/historyBack'
import Main from './main'

function component () {
  return (
    <>
      <Header>
        <HistoryBack />
      </Header>
      <Main>
        <Content />
      </Main>
    </>
  )
}

export default component
