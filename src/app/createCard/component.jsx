import Back from '@app/back'
import Create from './create'
import Form from '@elements/form'
import Front from '@app/front'
import h from '@standard/h'
import Header from './header'
import Master from '@app/master'

function component (card) {
  return (
    <Master>
      <Header />
      <Form onSubmit={(e) => card.create(e)}>
        <Front value={card.front} />
        <Back value={card.back} />
        <Create />
      </Form>
    </Master>
  )
}

export default component
