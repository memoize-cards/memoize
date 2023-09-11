import { params } from '@standard/router'
import middleware from '@standard/middleware'
import result from '@standard/result'
import supabase from '@artifact/supabase'

const push = middleware(async function (card) {
  const { error } = await supabase.from('card').delete().eq('id', params.id)
  error
    ? card[result.Error]?.(error)
    : card[result.Ok]?.()
})

export default {
  push
}
