import middleware from '@standard/middleware'
import supabase from '@artifact/supabase'
import result from '@standard/result'

const pull = middleware(async function (args, next) {
  const decks = await next(...args)
  const { data, error } = await supabase.from('deck').select('id, name, description')
  error
    ? decks[result.Error]?.(error)
    : decks[result.Ok]?.(data)
  return decks
})

export default {
  pull
}
