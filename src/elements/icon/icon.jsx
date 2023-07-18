import h from '@standard/h'
import mapper from './mapper'
import style from './style'

const icon = new Proxy({}, {
  get (_target, key) {
    return (props) => (
      <img {...props} className={[style.icon, props.className]} src={mapper(key)} loading='lazy' />
    )
  }
})

export default icon
