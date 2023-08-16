import h, { render } from '@standard/h'
import router from '@standard/router'

router('/termsOfUse', async function termsOfUse () {
  const { default: TermsOfUse } = await import('./termsOfUse' /* webpackChunkName: "termsOfUse" */)
  render(document.body, <TermsOfUse />)
})
