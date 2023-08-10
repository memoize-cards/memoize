import h, { render } from '@standard/h'
import router from '@standard/router'

router('/login', async function logIn () {
  const { default: LogIn } = await import('./auth' /* webpackChunkName: "logIn" */)
  render(document.body, <LogIn />)
})
