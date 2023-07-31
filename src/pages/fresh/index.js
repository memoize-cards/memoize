import h, { render } from '@standard/h'
import router from '@standard/router'

router('/', async function home () {
  const { default: Card } = await import('./fresh' /* webpackChunkName: "card" */)
  render(document.body, <Card />)
})
