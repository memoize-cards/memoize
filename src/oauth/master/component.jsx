import container from '@elements/container'
import h from '@standard/h'
import Main from './main'

function component (_props, children) {
  return (
    <container.Div>
      <Main>
        {children}
      </Main>
    </container.Div>
  )
}

export default component
