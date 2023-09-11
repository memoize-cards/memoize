import h, { Fragment } from '@standard/h'

function component (flip, children) {
  return (
    <>
      {children[flip.position]}
    </>
  )
}

export default component
