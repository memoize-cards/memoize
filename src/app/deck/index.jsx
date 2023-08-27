import h, { render } from '@standard/h'
import router from '@standard/router'

router('/deck/:id', async function deck () {
  const { default: Deck } = await import('./deck' /* webpackChunkName: "deck" */)
  render(document.body, <Deck />)
})
