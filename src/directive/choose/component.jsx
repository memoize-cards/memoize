/**
 * Filter and return children elements based on the provided 'when' prop.
 *
 * @param {Object} props - The component props containing the 'when' prop.
 * @param {any} props.when - The value to match against the 'equal' attribute of children.
 * @param {Array<HTMLElement>} children - An array of child elements to filter.
 * @returns {Array<HTMLElement>} - An array of child elements that match the 'when' prop.
 */
function component (props, children) {
  const { when } = props
  const choosies = children.filter((child) => {
    const attributes = [...child.attributes]
    const { value } = attributes.find(({ key }) => (key === 'equal'))
    return (when === value)
  })
  return choosies
}

export default component
