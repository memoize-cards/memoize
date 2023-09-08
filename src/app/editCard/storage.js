import { params } from '@standard/router'
import interceptor from '@standard/interceptor'
import middleware from '@standard/middleware'
import result from '@standard/result'
import supabase from '@artifact/supabase'

const pull = middleware(async function (args, next) {
  const { data } = await supabase.from('card').select('id, back, front').eq('id', params.id).single()
  const { id, front, back } = data
  return next(id, front, back)
})

const push = interceptor(function (args, next) {
  setImmediate(async () => {
    const { back, front } = this
    const { data, error } = await supabase.from('card').update({ back, front }).eq('id', this.id).select()
    error
      ? this[result.Error]?.(error)
      : this[result.Ok]?.(data)
  })
  return next(...args)
})

export default {
  pull,
  push
}
