import h, { render } from '@standard/h'
import router from '@standard/router'

router('/without-deck', async function withoutDeck () {
  const { default: Deck } = await import('./deck' /* webpackChunkName: "studyCompleted" */)
  render(document.body, <Deck />)
})
