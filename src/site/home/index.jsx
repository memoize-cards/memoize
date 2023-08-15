import h, { render } from '@standard/h'
import router from '@standard/router'

router('/', async function home () {
  const { default: Home } = await import('./home' /* webpackChunkName: "home" */)
  render(document.body, <Home />)
})
