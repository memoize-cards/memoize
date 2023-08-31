import Back from '@app/back'
import Footer from './footer'
import Form from '@elements/form'
import Front from '@app/front'
import h from '@standard/h'
import Header from './header'
import Master from '@app/master'
import Save from './save'

function component (card) {
  return (
    <Master>
      <Header />
      <Form onSubmit={(e) => card.save(e)}>
        <Front value={card.front} />
        <Back value={card.back} />
        <Save />
      </Form>
      <Footer />
    </Master>
  )
}

export default component
