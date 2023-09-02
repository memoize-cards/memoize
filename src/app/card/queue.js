import Deck from './deck'
import interceptor from '@standard/interceptor'
import Interval from './interval'
import middleware from '@standard/middleware'
import result from '@standard/result'
import supabase from '@artifact/supabase'

async function request (card) {
  const { data, error } = await supabase.from('card').select('*').eq('deck', Deck.id).lte('interval', Interval.expired).range(1, 1).single()
  data
    ? card[result.Ok]?.(data)
    : card[result.Error]?.(error)
}

const queue = middleware(async function (args, next) {
  const card = await next(...args)
  setImmediate(() => request(card))
  return card
})

const next = interceptor(function (args, next) {
  setImmediate(() => request(this))
  return next(...args)
})

Object.assign(queue, {
  next
})

export default queue
