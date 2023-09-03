import { params } from '@standard/router'
import middleware from '@standard/middleware'
import result from '@standard/result'
import supabase from '@artifact/supabase'

const pull = middleware(async function (args, next) {
  const learn = await next(...args)
  const { count, error } = await supabase.from('card').select('*', { count: 'exact', head: true }).eq('deck', params.id).eq('type', 3)
  error
    ? learn[result.Error]?.(error)
    : learn[result.Ok]?.(count)
  return learn
})

export default {
  pull
}
