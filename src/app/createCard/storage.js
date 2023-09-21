import interceptor from '@standard/interceptor'
import request from '@standard/request'
import result from '@standard/result'
import supabase from '@artifact/supabase'

const push = interceptor(function (args, next) {
  setImmediate(async () => {
    const payload = this[request.Post]?.()
    const { data, error } = await supabase.from('card').insert([payload]).select().single()
    error
      ? this[result.Error]?.(error)
      : this[result.Ok]?.(data)
  })
  return next(...args)
})

export default {
  push
}
