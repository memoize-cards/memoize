import Back from '@app/back'
import BackToCard from './backToCard'
import Delete from './delete'
import Form from '@elements/form'
import Front from '@app/front'
import h from '@standard/h'
import Header from './header'
import Main from './main'
import Master from '@app/master'
import Save from './save'

function component (card) {
  return (
    <Master>
      <BackToCard />
      <Header />
      <Main>
        <Form onSubmit={(e) => card.save(e)}>
          <Front value={card.front} />
          <Back value={card.back} />
          <Save />
        </Form>
        <Delete />
      </Main>
    </Master>
  )
}

export default component
