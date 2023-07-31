import env from '@standard/env'

/**
 * The event listener for the 'load' event of the window object.
 * It registers the service worker if the environment is "production".
 *
 * @param {Event} event - The load event object.
 */
window.addEventListener('load', function () {
  env.production && (
    navigator
      .serviceWorker
      .register(new URL('./sw', import.meta.url /* webpackChunkName: "sw" */))
  )
})
