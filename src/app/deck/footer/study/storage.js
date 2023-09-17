import Deck from './deck'
import Interval from './interval'
import middleware from '@standard/middleware'
import result from '@standard/result'
import supabase from '@artifact/supabase'

const pull = middleware(async function (study) {
  const { count, error } = await supabase.from('card').select('*', { count: 'exact', head: true }).eq('deck', Deck.id).lte('interval', Interval.expired)
  error
    ? study[result.Error]?.(error)
    : study[result.Ok]?.(count)
})

export default {
  pull
}
