import h, { render } from '@standard/h'
import router from '@standard/router'

router('/:deck/create', async function create () {
  const { default: Card } = await import('./card' /* webpackChunkName: "fresh" */)
  render(document.body, <Card />)
})
