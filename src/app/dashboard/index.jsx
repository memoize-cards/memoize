import h, { render } from '@standard/h'
import router from '@standard/router'

router('/dashboard', async function dashboard () {
  const { default: Dashboard } = await import('./dashboard' /* webpackChunkName: "dashboard" */)
  render(document.body, <Dashboard />)
})
