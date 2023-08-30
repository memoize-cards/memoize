import h, { render } from '@standard/h'
import router from '@standard/router'

router('/delete-deck/:id', async function deleteDeck () {
  const { default: Deck } = await import('./deck' /* webpackChunkName: "deleteDeck" */)
  render(document.body, <Deck />)
})
