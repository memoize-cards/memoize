import h from '@standard/h'

const icon = new Proxy({}, {
  get (_target, key) {
    return function component (props) {
      return (
        <span {...props} className={['material-symbols-rounded', props.className]}>{key.toLowerCase()}</span>
      )
    }
  }
})

export default icon
