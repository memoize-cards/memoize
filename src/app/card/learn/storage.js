import interceptor from '@standard/interceptor'
import supabase from '@artifact/supabase'

function storage (args, next) {
  const card = next(...args)

  setImmediate(async () => {
    await supabase
      .from('card')
      .update(card)
      .eq('id', this.id)
  })

  return card
}

export default interceptor(storage)
