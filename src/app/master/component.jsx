import container from '@elements/container'
import h from '@standard/h'
import HistoryBack from './historyBack'
import Header from './header'
import Main from './main'

function component (_props, children) {
  return (
    <container.Div>
      <Header>
        <HistoryBack />
      </Header>
      <Main>
        {children}
      </Main>
    </container.Div>
  )
}

export default component
