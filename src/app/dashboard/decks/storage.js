import middleware from '@standard/middleware'
import supabase from '@artifact/supabase'
import response from '@standard/response'

async function select (decks) {
  const { data, error } = await supabase.from('deck').select('id, name, description')
  error
    ? decks[response.Error]?.(error)
    : decks[response.Ok]?.(data)
}

const pull = middleware(function (decks) {
  select(decks)
})

export default {
  pull
}
