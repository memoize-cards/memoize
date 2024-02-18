import env from '@standard/env'

window.addEventListener('load', () => {
  env.production && (
    navigator
      .serviceWorker
      .register(new URL('./sw', import.meta.url /* webpackChunkName: "sw" */))
  )
})
