import env from '@standard/env'

window.addEventListener('load', function () {
  env.production && (
    navigator
      .serviceWorker
      .register(new URL('./sw', import.meta.url /* webpackChunkName: "sw" */))
  )
})
