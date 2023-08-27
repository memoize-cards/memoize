import Create from './create'
import Footer from './footer'
import h from '@standard/h'
import Header from './header'
import Main from '@elements/main'
import stack from '@elements/stack'
import Study from './study'

function component () {
  return (
    <Main tall>
      <Header />
      <stack.Div column>
        <Study />
        <Create />
      </stack.Div>
      <Footer />
    </Main>
  )
}

export default component
