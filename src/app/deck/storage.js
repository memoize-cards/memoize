import middleware from '@standard/middleware'
import request from '@standard/request'
import result from '@standard/result'
import supabase from '@artifact/supabase'

async function select (deck) {
  const payload = deck[request.Get]?.()
  const { data, error } = await supabase.from('deck').select('id, name, description').eq('id', payload.id).single()
  error
    ? deck[result.Error]?.(error)
    : deck[result.Ok]?.(data)
}

const pull = middleware(function (deck) {
  select(deck)
})

export default {
  pull
}
