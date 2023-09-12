import Continue from './continue'
import Form from '@elements/form'
import h from '@standard/h'
import Header from './header'
import Master from './master'

function component (card) {
  return (
    <Master>
      <Header />
      <Form onSubmit={(e) => card.continue(e)}>
        <Continue />
      </Form>
    </Master>
  )
}

export default component
