import h, { Fragment } from '@standard/h'

function component (_props, children) {
  return (
    <Fragment slot='label'>{children}</Fragment>
  )
}

export default component
