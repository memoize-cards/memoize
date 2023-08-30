import Description from '@app/description'
import Footer from './footer'
import Form from '@elements/form'
import h from '@standard/h'
import Header from './header'
import Master from '@app/master'
import Name from '@app/name'
import Save from './save'

function component (deck) {
  return (
    <Master>
      <Header />
      <Form onSubmit={(e) => deck.save(e)}>
        <Name value={deck.name} />
        <Description value={deck.description} />
        <Save />
      </Form>
      <Footer />
    </Master>
  )
}

export default component
