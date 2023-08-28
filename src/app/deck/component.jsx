import CreateCard from './createCard'
import Footer from './footer'
import h from '@standard/h'
import Header from './header'
import Master from '@app/master'
import stack from '@elements/stack'
import Study from './study'

function component () {
  return (
    <Master>
      <Header />
      <stack.Div column>
        <Study />
        <CreateCard />
      </stack.Div>
      <Footer />
    </Master>
  )
}

export default component
