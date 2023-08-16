import h, { render } from '@standard/h'
import router from '@standard/router'

router('/privacy-policy', async function privacyPolicy () {
  const { default: PrivacyPolicy } = await import('./privacyPolicy' /* webpackChunkName: "privacyPolicy" */)
  render(document.body, <PrivacyPolicy />)
})
