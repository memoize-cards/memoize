import middleware from '@standard/middleware'
import Reload from './reload'
import request from '@standard/request'
import result from '@standard/result'
import supabase from '@artifact/supabase'

async function select (study) {
  const payload = study[request.Get]?.()
  const { count, error } = await supabase.from('card').select('*', { count: 'exact', head: true }).eq('deck', payload.deck).lte('interval', payload.interval)
  error
    ? study[result.Error]?.(error)
    : study[result.Ok]?.(count)
}

const pull = middleware(function (study) {
  select(study)
  setInterval(() => select(study), Reload.interval)
})

export default {
  pull
}
