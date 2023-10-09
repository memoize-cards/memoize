import { params } from '@standard/router'
import middleware from '@standard/middleware'
import result from '@standard/result'
import supabase from '@artifact/supabase'

const pull = middleware(async function (relearn) {
  const { count, error } = await supabase.from('card').select('*', { count: 'exact', head: true }).eq('deck', params.id).eq('type', 3)
  error
    ? relearn[result.Error]?.(error)
    : relearn[result.Ok]?.(count)
})

export default {
  pull
}
