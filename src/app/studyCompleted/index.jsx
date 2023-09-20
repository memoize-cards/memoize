import h, { render } from '@standard/h'
import router from '@standard/router'

router('/deck/:id/card/study-completed', async function studyCompleted () {
  const { default: Card } = await import('./card' /* webpackChunkName: "studyCompleted" */)
  render(document.body, <Card />)
})
