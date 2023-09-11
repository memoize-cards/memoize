import middleware from '@standard/middleware'
import supabase from '@artifact/supabase'
import result from '@standard/result'

const pull = middleware(async function (decks) {
  const { data, error } = await supabase.from('deck').select('id, name, description')
  error
    ? decks[result.Error]?.(error)
    : decks[result.Ok]?.(data)
})

export default {
  pull
}
