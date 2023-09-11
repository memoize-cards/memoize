import { params } from '@standard/router'
import middleware from '@standard/middleware'
import result from '@standard/result'
import supabase from '@artifact/supabase'

const pull = middleware(async function (total) {
  const { count, error } = await supabase.from('card').select('*', { count: 'exact', head: true }).eq('deck', params.id)
  error
    ? total[result.Error]?.(error)
    : total[result.Ok]?.(count)
})

export default {
  pull
}
