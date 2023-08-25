import Form from '@elements/form'
import h from '@standard/h'
import Header from './header'
import Main from '@elements/main'

function component (deck) {
  return (
    <Main>
      <Header />
      <Form onSubmit={(e) => deck.create(e)}>
      </Form>
    </Main>
  )
}

export default component
