import interceptor from '@standard/interceptor'
import supabase from '@artifact/supabase'

const push = interceptor(async function storage (args, next) {
  const card = next(...args)
  await supabase.from('card').update(card).eq('id', this.id)
  return card
})

export default {
  push
}
