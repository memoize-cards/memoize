import h, { render } from '@standard/h'
import router from '@standard/router'

router('/logout', async function logOut () {
  const { default: LogOut } = await import('./auth' /* webpackChunkName: "logOut" */)
  render(document.body, <LogOut />)
})
