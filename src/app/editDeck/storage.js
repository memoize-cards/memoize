import { params } from '@standard/router'
import interceptor from '@standard/interceptor'
import middleware from '@standard/middleware'
import result from '@standard/result'
import supabase from '@artifact/supabase'

const pull = middleware(async function (args, next) {
  const { data } = await supabase.from('deck').select('id, name, description').eq('id', params.id).single()
  const { id, name, description } = data
  return await next(id, name, description)
})

const push = interceptor(function (args, next) {
  setImmediate(async () => {
    const { id, name, description } = this
    console.log(this)
    const { data, error } = await supabase.from('deck').update({ name, description }).eq('id', id).select()
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
