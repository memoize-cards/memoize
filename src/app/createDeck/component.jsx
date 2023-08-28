import Create from './create'
import Description from '@app/description'
import Form from '@elements/form'
import h from '@standard/h'
import Header from './header'
import Master from '@app/master'
import Name from '@app/name'

function component (deck) {
  return (
    <Master>
      <Header />
      <Form onSubmit={(e) => deck.create(e)}>
        <Name value={deck.name} />
        <Description value={deck.description} />
        <Create />
      </Form>
    </Master>
  )
}

export default component
