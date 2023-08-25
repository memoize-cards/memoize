import h, { render } from '@standard/h'
import router from '@standard/router'

router('/deck/:id/create-card', async function createCard () {
  const { default: Card } = await import('./card' /* webpackChunkName: "createCard" */)
  render(document.body, <Card />)
})
