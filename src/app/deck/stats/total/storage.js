import Deck from '@app/deck/stats/deck'
import middleware from '@standard/middleware'
import response from '@standard/response'
import supabase from '@artifact/supabase'

const pull = middleware(async (total) => {
  const { count, error } = await supabase.from('card').select('*', { count: 'exact', head: true }).eq('deck', Deck.id)
  error
    ? total[response.Error]?.(error)
    : total[response.Ok]?.(count)
})

export default {
  pull
}
