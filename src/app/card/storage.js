import interceptor from '@standard/interceptor'
import middleware from '@standard/middleware'
import request from '@standard/request'
import response from '@standard/response'
import supabase from '@artifact/supabase'

async function select (card) {
  const { deck, validity } = card[request.Get]?.() ?? {}
  const { data, error } = await supabase.from('card').select('*').eq('deck', deck).lte('validity', validity).limit(1).single()
  data
    ? card[response.Ok]?.(data)
    : card[response.Error]?.(error)
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
