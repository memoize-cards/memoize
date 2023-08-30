import { params } from '@standard/router'
import middleware from '@standard/middleware'
import result from '@standard/result'
import supabase from '@artifact/supabase'

const storage = middleware(async function (args, next) {
  const deck = await next(...args)
  const { data, error } = await supabase.from('deck').select('name, description').eq('id', params.id).single()
  error
    ? deck[result.Error]?.(error)
    : deck[result.Ok]?.(data)
  return deck
})

export default storage
