import h from '@standard/h'
import HistoryBack from '@components/historyBack'
import Main from '@elements/main'
import stack from '@elements/stack'

function component () {
  return (
    <Main>
      <stack.Header>
        <HistoryBack />
      </stack.Header>
    </Main>
  )
}

export default component
