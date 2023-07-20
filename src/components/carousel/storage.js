import http from '@standard/http'
import middleware from '@standard/middleware'
import mock from './mock.json'
import result from '@standard/result'

const storage = middleware(async function (carousel) {
  const url = '/b/explore-aulas'
  const { category, type } = carousel
  const { data, error } = await http.post(url).body({ category, type }).json()
  error
    ? carousel[result.Error]?.(mock)
    : carousel[result.Ok]?.(mock)
})

export default storage
