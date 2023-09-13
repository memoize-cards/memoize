import Deck from './deck'
import interceptor from '@standard/interceptor'
import Interval from './interval'
import middleware from '@standard/middleware'
import result from '@standard/result'
import supabase from '@artifact/supabase'

async function request (card) {
  const { data, error } = await supabase.from('card').select('*').eq('deck', Deck.id).lte('interval', Interval.expired).limit(1).single()
  data
    ? card[result.Ok]?.(data)
    : card[result.Error]?.(error)
}

const queue = middleware(function (card) {
  setImmediate(() => request(card))
})

const next = interceptor(async function (args, next) {
  await next(...args)
  await request(this)
  return this
})

Object.assign(queue, {
  next
})

export default queue
