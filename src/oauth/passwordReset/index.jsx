import h, { render } from '@standard/h'
import router from '@standard/router'

router('/password-reset', async function passwordReset () {
  const { default: PasswordReset } = await import('./auth' /* webpackChunkName: "passwordReset" */)
  render(document.body, <PasswordReset />)
})
