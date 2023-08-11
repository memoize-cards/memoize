import h, { render } from '@standard/h'
import router from '@standard/router'

router('/signup', async function signUp () {
  const { default: SignUp } = await import('./auth' /* webpackChunkName: "signUp" */)
  render(document.body, <SignUp />)
})
