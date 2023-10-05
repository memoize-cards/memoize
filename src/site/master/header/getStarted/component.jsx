import Button from '@elements/button'
import Choose from '@directive/choose'
import h from '@standard/h'
import redirectTo from './redirectTo'
import status from './status'
import translate from './translate'

function component (getStarted) {
  return (
    <div>
      <Choose when={getStarted.user}>
        <Button equal={status.loggedOut} onClick={() => redirectTo.login()} primary>{translate.login}</Button>
        <Button equal={status.logged} onClick={() => redirectTo.dashboard()} primary>{translate.dashboard}</Button>
      </Choose>
    </div>
  )
}

export default component
