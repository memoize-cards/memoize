import middleware from '@standard/middleware'
import request from '@standard/request'
import result from '@standard/result'
import schedule from './schedule'
import supabase from '@artifact/supabase'

async function select (study) {
  const payload = study[request.Get]?.()
  const { count, error } = await supabase.from('card').select('*', { count: 'exact', head: true }).eq('deck', payload.deck).lte('validity', payload.validity)
  error
    ? study[result.Error]?.(error)
    : study[result.Ok]?.(count)
}

const pull = middleware(function (study) {
  select(study)
  schedule(() => select(study))
})

export default {
  pull
}
