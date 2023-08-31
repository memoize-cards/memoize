import { params } from '@standard/router'
import middleware from '@standard/middleware'
import result from '@standard/result'
import supabase from '@artifact/supabase'

const push = middleware(async function (args, next) {
  const deck = await next(...args)
  const { error } = await supabase.from('card').delete().eq('id', params.id)
  error
    ? deck[result.Error]?.(error)
    : deck[result.Ok]?.()
  return deck
})

export default {
  push
}
