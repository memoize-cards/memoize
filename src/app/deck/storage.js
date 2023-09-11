import { params } from '@standard/router'
import middleware from '@standard/middleware'
import result from '@standard/result'
import supabase from '@artifact/supabase'

const pull = middleware(async function (deck) {
  const { data, error } = await supabase.from('deck').select('name, description').eq('id', params.id).single()
  error
    ? deck[result.Error]?.(error)
    : deck[result.Ok]?.(data)
})

export default {
  pull
}
