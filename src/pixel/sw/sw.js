'use strict'

/**
 * Service Worker Cache Name
 *
 * @type {string}
 */
const CACHE = process.env.SW_CACHE

/**
 * Event listener for the 'activate' event.
 * Deletes old caches and activates the service worker.
 *
 * @param {Event} event - The event object.
 */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      Promise.all((await caches.keys()).map((v) => (CACHE !== v && caches.delete(v))))
    })()
  )

  self.clients.claim()
})

/**
 * Event listener for the 'install' event.
 * Adds initial resources to the cache and installs the service worker.
 *
 * @param {Event} event - The event object.
 */
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE)
      await cache.addAll(['/'])
    })()
  )

  self.skipWaiting()
})

/**
 * Event listener for the 'fetch' event.
 * Handles fetching resources from the cache or the network.
 *
 * @param {Event} event - The event object.
 */
self.addEventListener('fetch', (event) => {
  if (/.(?<ext>css|eot|htm|html|ico|js|json|otf|svg|ttf|woff|woff2)$/i.test(event.request.url)) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE)
        return await cache.match(event.request) || fetch(event.request)
      })()
    )
  }
})
