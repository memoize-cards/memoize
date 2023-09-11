import { params } from '@standard/router'
import interceptor from '@standard/interceptor'
import middleware from '@standard/middleware'
import option from '@standard/option'
import result from '@standard/result'
import supabase from '@artifact/supabase'

const pull = middleware(async function (deck) {
  const { data, error } = await supabase.from('deck').select('id, name, description').eq('id', params.id).single()
  error
    ? deck[result.Error]?.(error)
    : deck[result.Ok]?.(option.pull(data))
})

const push = interceptor(function (args, next) {
  setImmediate(async () => {
    const { id, name, description } = this
    const { data, error } = await supabase.from('deck').update({ name, description }).eq('id', id).select()
    error
      ? this[result.Error]?.(error)
      : this[result.Ok]?.(option.push(data))
  })
  return next(...args)
})

export default {
  pull,
  push
}
