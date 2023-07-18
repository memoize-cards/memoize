import http from '@standard/http'
import middleware from '@standard/middleware'
import mock from './mock.json'
import result from '@standard/result'

const storage = middleware(async function (carousel) {
  const { category, type } = carousel
  const { data, error } = await http.post('/').body({ category, type }).json()
  error
    ? carousel[result.Ok](mock)
    : carousel[result.Ok](data)
})

export default storage
