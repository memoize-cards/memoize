import BackToHome from './backToHome'
import container from '@elements/container'
import h from '@standard/h'
import Header from './header'
import Main from './main'

function component (_props, children) {
  return (
    <container.Div>
      <Header>
        <BackToHome />
      </Header>
      <Main>
        {children}
      </Main>
    </container.Div>
  )
}

export default component
