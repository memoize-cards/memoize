import { Style } from '@standard/css'
import h, { Fragment } from '@standard/h'

function component (_props, children) {
  return (
    <>
      <Style />
      {children}
    </>
  )
}

export default component
