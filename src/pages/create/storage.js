import interceptor from '@standard/interceptor'
import supabase from '@artifact/supabase'

function storage (args, next) {
  const card = next(...args)

  setImmediate(async () => {
    await supabase
      .from('card')
      .insert([card])
  })

  return card
}

export default interceptor(storage)
