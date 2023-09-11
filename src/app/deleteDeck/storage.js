import { params } from '@standard/router'
import middleware from '@standard/middleware'
import result from '@standard/result'
import supabase from '@artifact/supabase'

const push = middleware(async function (deck) {
  const { error } = await supabase.from('deck').delete().eq('id', params.id)
  error
    ? deck[result.Error]?.(error)
    : deck[result.Ok]?.()
})

export default {
  push
}
