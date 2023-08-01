import Deck from './deck'
import interceptor from '@standard/interceptor'
import Interval from './interval'
import middleware from '@standard/middleware'
import result from '@standard/result'

async function request (card) {
  const { default: supabase } = await import('@artifact/supabase' /* webpackChunkName: "supabase" */)
  const { data } = await supabase
    .from('card')
    .select('*')
    .eq('deck', Deck.id)
    .lte('interval', Interval.expired)
    .single()

  card[result.Ok]?.(data)
}

const queue = middleware(request)

const next = interceptor((args, next) => {
  setImmediate(() => request(this))
  return next(...args)
})

Object.assign(queue, {
  next
})

export default queue
