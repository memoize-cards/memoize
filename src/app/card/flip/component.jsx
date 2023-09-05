import Choose from '@directive/choose'
import h, { Fragment } from '@standard/h'

function component (flip, children) {
  return (
    <>
      <Choose when={flip.position}>
        {children}
      </Choose>
    </>
  )
}

export default component
