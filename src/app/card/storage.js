import interceptor from '@standard/interceptor'
import middleware from '@standard/middleware'
import request from '@standard/request'
import result from '@standard/result'
import supabase from '@artifact/supabase'

async function select (card) {
  const { deck, interval } = card[request.Get]?.()
  const { data, error } = await supabase.from('card').select('*').eq('deck', deck).lte('interval', interval).limit(1).single()
  data
    ? card[result.Ok]?.(data)
    : card[result.Error]?.(error)
}

const storage = middleware(function (card) {
  setImmediate(() => select(card))
})

const pull = interceptor(async function (args, next) {
  await next(...args)
  await select(this)
  return this
})

Object.assign(storage, {
  pull
})

export default storage
