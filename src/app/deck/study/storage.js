import middleware from '@standard/middleware'
import request from '@standard/request'
import response from '@standard/response'
import schedule from './schedule'
import supabase from '@artifact/supabase'

async function select (study) {
  const payload = study[request.Get]?.()
  const { count, error } = await supabase.from('card').select('*', { count: 'exact', head: true }).eq('deck', payload.deck).lte('validity', payload.validity)
  error
    ? study[response.Error]?.(error)
    : study[response.Ok]?.(count)
}

const pull = middleware(function (study) {
  select(study)
  schedule(() => select(study))
})

export default {
  pull
}
