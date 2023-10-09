import BackToDeck from '@app/backToDeck'
import Delete from './delete'
import Description from '@app/description'
import Form from '@elements/form'
import h from '@standard/h'
import Header from './header'
import Main from './main'
import Master from '@app/master'
import Name from '@app/name'
import Save from './save'

function component (deck) {
  return (
    <Master>
      <BackToDeck />
      <Header />
      <Main>
        <Form onSubmit={(e) => deck.save(e)}>
          <Name value={deck.name} />
          <Description value={deck.description} />
          <Save />
          <Delete />
        </Form>
      </Main>
    </Master>
  )
}

export default component
