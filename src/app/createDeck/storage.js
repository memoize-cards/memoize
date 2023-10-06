import interceptor from '@standard/interceptor'
import request from '@standard/request'
import result from '@standard/result'
import supabase from '@artifact/supabase'

const insert = async function (deck) {
  const payload = await deck[request.Post]?.()
  const { data, error } = await supabase.from('deck').insert([payload]).select().single()
  error
    ? deck[result.Error]?.(error)
    : deck[result.Ok]?.(data)
}

const push = interceptor(function (args, next) {
  setImmediate(() => insert(this))
  return next(...args)
})

export default {
  push
}
