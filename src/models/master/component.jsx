import { Style } from '@standard/css'
import h, { Fragment } from '@standard/h'

/**
 * Represents a functional component that wraps its children with a custom Style element.
 *
 * @param {Object} _props - The props object. (Unused in this implementation)
 * @param {Array} children - The child elements to be wrapped.
 * @returns {JSX.Element} The JSX element representing the component with the custom Style element.
 */
function component (_props, children) {
  return (
    <>
      <Style />
      {children}
    </>
  )
}

export default component
