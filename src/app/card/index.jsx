import h, { render } from '@standard/h'
import router from '@standard/router'

router('/deck/:id/card', async function card () {
  const { default: Card } = await import('./card' /* webpackChunkName: "card" */)
  render(document.body, <Card />)
})
