import h, { render } from '@standard/h'
import router from '@standard/router'

router('/deck/:deck/delete-card/:id', async function deleteCard () {
  const { default: Card } = await import('./card' /* webpackChunkName: "deleteCard" */)
  render(document.body, <Card />)
})
