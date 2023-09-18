import Deck from './deck'
import Interval from './interval'
import middleware from '@standard/middleware'
import Reload from './reload'
import result from '@standard/result'
import supabase from '@artifact/supabase'

async function request (study) {
  const { count, error } = await supabase.from('card').select('*', { count: 'exact', head: true }).eq('deck', Deck.id).lte('interval', Interval.expired)
  error
    ? study[result.Error]?.(error)
    : study[result.Ok]?.(count)
}

const pull = middleware(function (study) {
  request(study)
  setInterval(() => request(study), Reload.interval)
})

export default {
  pull
}
