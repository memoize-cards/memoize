'use strict'

const CACHE = process.env.SW_CACHE

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      Promise.all((await caches.keys()).map((v) => (CACHE !== v && caches.delete(v))))
    })()
  )

  self.clients.claim()
})

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE)
      await cache.addAll(['/'])
    })()
  )

  self.skipWaiting()
})

self.addEventListener('fetch', (event) => {
  if (/.(?<ext>css|eot|htm|html|ico|js|json|otf|svg|ttf|woff|woff2)$/i.test(event.request.url)) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE)
        const cachedResponse = await cache.match(event.request)
        return cachedResponse || fetch(event.request)
      })()
    )
  }
})
