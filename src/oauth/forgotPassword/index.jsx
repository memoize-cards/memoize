import h, { render } from '@standard/h'
import router from '@standard/router'

router('/forgot-password', async function forgotPassword () {
  const { default: Forgot } = await import('./auth' /* webpackChunkName: "forgotPassword" */)
  render(document.body, <Forgot />)
})
