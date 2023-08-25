import Create from './create'
import Description from '@components/description'
import Form from '@elements/form'
import h from '@standard/h'
import Header from './header'
import Main from '@elements/main'
import Name from '@components/name'

function component (deck) {
  return (
    <Main>
      <Header />
      <Form onSubmit={(e) => deck.create(e)}>
        <Name value={deck.name} />
        <Description value={deck.description} />
        <Create />
      </Form>
    </Main>
  )
}

export default component
