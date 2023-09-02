import CreateCard from './createCard'
import Description from './description'
import Footer from './footer'
import h from '@standard/h'
import Header from './header'
import Master from '@app/master'
import Name from './name'
import stack from '@elements/stack'
import Stats from './stats'
import Study from './study'

function component (deck) {
  return (
    <Master>
      <Header>
        <Name>{deck.name}</Name>
        <Description>{deck.description}</Description>
      </Header>
      <Stats />
      <stack.Div column>
        <Study />
        <CreateCard />
      </stack.Div>
      <Footer />
    </Master>
  )
}

export default component
