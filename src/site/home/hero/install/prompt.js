import middleware from '@standard/middleware'
import result from '@standard/result'

const prompt = middleware((install) => {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    install[result.Ok]?.(e)
  })
})

export default prompt
