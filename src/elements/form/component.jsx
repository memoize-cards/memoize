import h from '@standard/h'
import stack from '@elements/stack'
import validity from './validity'

function component (props, children) {
  return (
    <stack.Form {...props} onSubmit={(e) => (validity(e) && props.onSubmit?.(e))} column sm novalidate>
      {children}
    </stack.Form>
  )
}

export default component
