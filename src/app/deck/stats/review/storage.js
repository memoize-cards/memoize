import { params } from '@standard/router'
import middleware from '@standard/middleware'
import result from '@standard/result'
import supabase from '@artifact/supabase'

const pull = middleware(async function (review) {
  const { count, error } = await supabase.from('card').select('*', { count: 'exact', head: true }).eq('deck', params.id).eq('type', 2)
  error
    ? review[result.Error]?.(error)
    : review[result.Ok]?.(count)
})

export default {
  pull
}
