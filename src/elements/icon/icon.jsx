import h from '@standard/h'
import mapper from './mapper'
import style from './style'

/**
 * A utility function that returns a dynamically generated image element based on the provided key.
 * It creates an `img` element with the specified properties, using the `key` to determine the `src` attribute.
 * The `className` property is combined with the default `style.icon` class to style the icon.
 *
 * @param {string} key - The key to determine the source of the image.
 * @param {Object} props - Other attributes and properties to be applied to the `img` element.
 * @returns {Element} - The dynamically generated `img` element with the specified properties.
 */
const icon = new Proxy({}, {
  get (_target, key) {
    return (props) => (
      <img {...props} className={[style.icon, props.className]} src={mapper(key)} loading='lazy' />
    )
  }
})

export default icon
