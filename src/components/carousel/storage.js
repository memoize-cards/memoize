import http from '@standard/http'
import middleware from '@standard/middleware'
import mock from './mock.json'
import result from '@standard/result'

/**
 * Middleware function that fetches carousel data from a server or uses a mock data if the server call fails.
 *
 * @function
 * @memberof module:@components/carousel/storage
 * @param {Carousel} carousel - The carousel instance to be populated with data.
 * @returns {Promise<void>} A Promise that resolves once the carousel data is fetched and processed.
 */
const storage = middleware(async function (carousel) {
  const url = location.href
  const { category, type } = carousel
  const { data } = await http.post(url).body({ category, type }).json()
  carousel[result.Ok](data ?? mock)
})

export default storage
