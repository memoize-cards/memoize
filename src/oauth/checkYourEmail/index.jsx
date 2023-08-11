import h, { render } from '@standard/h'
import router from '@standard/router'

router('/check-your-email', async function checkYourEmail () {
  const { default: CheckYourEmail } = await import('./auth' /* webpackChunkName: "checkYourEmail" */)
  render(document.body, <CheckYourEmail />)
})
