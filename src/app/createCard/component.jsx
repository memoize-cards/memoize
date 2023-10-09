import Back from '@app/back'
import BackToDeck from '@app/backToDeck'
import Create from './create'
import Form from '@elements/form'
import Front from '@app/front'
import h from '@standard/h'
import Header from './header'
import Main from './main'
import Master from '@app/master'

function component (card) {
  return (
    <Master>
      <BackToDeck />
      <Header />
      <Main>
        <Form onSubmit={(e) => card.create(e)}>
          <Front value={card.front} />
          <Back value={card.back} />
          <Create />
        </Form>
      </Main>
    </Master>
  )
}

export default component
