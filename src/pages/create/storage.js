import interceptor from '@standard/interceptor'

function storage (args, next) {
  const card = next(...args)

  setImmediate(async () => {
    const { default: supabase } = await import('@artifact/supabase' /* webpackChunkName: "supabase" */)
    await supabase
      .from('card')
      .insert([card])
  })

  return card
}

export default interceptor(storage)
