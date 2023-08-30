import h, { render } from '@standard/h'
import router from '@standard/router'

router('/edit-deck/:id', async function editDeck () {
  const { default: Deck } = await import('./deck' /* webpackChunkName: "editDeck" */)
  render(document.body, <Deck />)
})
