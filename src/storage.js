import middleware from '@standard/middleware'
import mock from './mock.json'
import result from '@standard/result'

const storage = middleware(function (carousel) {
  carousel[result.Ok](mock)
})

export default storage
