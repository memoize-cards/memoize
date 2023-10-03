import middleware from '@standard/middleware'
import supabase from '@artifact/supabase'
import result from '@standard/result'

async function select (decks) {
  const { data, error } = await supabase.from('deck').select('id, name, description')
  error
    ? decks[result.Error]?.(error)
    : decks[result.Ok]?.(data)
}

const pull = middleware(async function (decks) {
  select(decks)
})

export default {
  pull
}
