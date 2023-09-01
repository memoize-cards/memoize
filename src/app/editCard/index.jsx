import h, { render } from '@standard/h'
import router from '@standard/router'

router('/deck/:deck/edit-card/:id', async function editCard () {
  const { default: Card } = await import('./card' /* webpackChunkName: "editCard" */)
  render(document.body, <Card />)
})
