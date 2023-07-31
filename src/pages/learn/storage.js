import middleware from '@standard/middleware'
import result from '@standard/result'
import Review from './review'

async function storage (card) {
  const { default: supabase } = await import('@artifact/supabase' /* webpackChunkName: "supabase" */)
  const { data } = await supabase
    .from('card')
    .select('*')
    .eq('deck', card.deck)
    .lte('interval', Review.interval)
    .single()

  card[result.Ok]?.(data)
}

export default middleware(storage)
