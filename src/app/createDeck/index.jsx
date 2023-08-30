import h, { render } from '@standard/h'
import router from '@standard/router'

router('/create-deck', async function createDeck () {
  const { default: Deck } = await import('./deck' /* webpackChunkName: "createDeck" */)
  render(document.body, <Deck />)
})
