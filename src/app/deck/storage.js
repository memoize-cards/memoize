import middleware from '@standard/middleware'
import request from '@standard/request'
import response from '@standard/response'
import supabase from '@artifact/supabase'

async function select (deck) {
  const payload = deck[request.Get]?.()
  const { data, error } = await supabase.from('deck').select('id, name, description').eq('id', payload.id).single()
  error
    ? deck[response.Error]?.(error)
    : deck[response.Ok]?.(data)
}

const pull = middleware(function (deck) {
  select(deck)
})

export default {
  pull
}
