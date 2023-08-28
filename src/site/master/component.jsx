import h, { Fragment } from '@standard/h'
import Header from './header'
import HistoryBack from '@components/historyBack'
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
