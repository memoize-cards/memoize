import { params } from '@standard/router'
import interceptor from '@standard/interceptor'
import middleware from '@standard/middleware'
import option from '@standard/option'
import response from '@standard/response'
import supabase from '@artifact/supabase'

const pull = middleware(async function (card) {
  const { data, error } = await supabase.from('card').select('id, back, front').eq('id', params.id).single()
  error
    ? card[response.Error]?.(error)
    : card[response.Ok]?.(option.pull(data))
})

const push = interceptor(function (args, next) {
  setImmediate(async () => {
    const { back, front } = this
    const { data, error } = await supabase.from('card').update({ back, front }).eq('id', this.id).select()
    error
      ? this[response.Error]?.(error)
      : this[response.Ok]?.(option.push(data))
  })
  return next(...args)
})

export default {
  pull,
  push
}
