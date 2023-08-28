import h, { Fragment } from '@standard/h'
import HistoryBack from './historyBack'
import Header from './header'
import Main from './main'

function component (_props, children) {
  return (
    <>
      <Header>
        <HistoryBack />
      </Header>
      <Main>
        {children}
      </Main>
    </>
  )
}

export default component
