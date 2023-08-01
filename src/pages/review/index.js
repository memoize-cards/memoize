import h, { render } from '@standard/h'
import router from '@standard/router'

router('/:deck/review', async function learn () {
  const { default: Card } = await import('./card' /* webpackChunkName: "learn" */)
  render(document.body, <Card />)
})
