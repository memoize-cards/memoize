import middleware from '@standard/middleware'
import response from '@standard/response'
import supabase from '@artifact/supabase'

async function getUser (avatar) {
  const { data: { user } } = await supabase.auth.getUser()
  user
    ? avatar[response.Ok]?.(user)
    : avatar[response.Error]?.()
}

const pull = middleware(function (avatar) {
  getUser(avatar)
})

export default {
  pull
}
