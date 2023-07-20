import http from '@standard/http'
import middleware from '@standard/middleware'
import mock from './mock.json'
import result from '@standard/result'

const storage = middleware(async function (carousel) {
  const url = location.href
  const { category, type } = carousel
  const { data } = await http.post(url).body({ category, type }).json()
  carousel[result.Ok](data ?? mock)
})

export default storage
