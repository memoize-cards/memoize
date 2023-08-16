import h from '@standard/h'

const icon = new Proxy({}, {
  get (_target, key) {
    return function component (props) {
      return (
        <span {...props} className={['material-symbols-outlined', props.className]}>{key.toLowerCase()}</span>
      )
    }
  }
})

export default icon
