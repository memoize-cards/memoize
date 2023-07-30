import h, { render } from '@standard/h'
import router from '@standard/router'

router('/', function home () {
  render(
    document.body,
    <h1>Memoize</h1>
  )
})
