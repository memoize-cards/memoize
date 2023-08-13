import h, { render } from '@standard/h'
import router from '@standard/router'

router('/set-new-password', async function setNewPassword () {
  const { default: SetNewPassword } = await import('./auth' /* webpackChunkName: "setNewPassword" */)
  render(document.body, <SetNewPassword />)
})
