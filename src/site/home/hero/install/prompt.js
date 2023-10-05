import middleware from '@standard/middleware'
import result from '@standard/result'

const prompt = middleware(function (install) {
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault()
    install[result.Ok]?.(e)
  })
})

export default prompt
