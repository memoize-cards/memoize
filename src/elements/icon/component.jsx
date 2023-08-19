import h from '@standard/h'
import style from './style'

const icon = new Proxy({}, {
  get (_target, key) {
    return function component (props) {
      return (
        <span {...props} className={['material-symbols-outlined', props.className, style.icon]}>{key.toLowerCase()}</span>
      )
    }
  }
})

export default icon
