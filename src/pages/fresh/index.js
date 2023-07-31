import h, { render } from '@standard/h'
import router from '@standard/router'

router('/:deck/fresh', async function fresh () {
  const { default: Card } = await import('./card' /* webpackChunkName: "fresh" */)
  render(document.body, <Card />)
})
