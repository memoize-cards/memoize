import middleware from '@standard/middleware'
import response from '@standard/response'
import supabase from '@artifact/supabase'

async function getUser (getStarted) {
  const { data: { user } } = await supabase.auth.getUser()
  user
    ? getStarted[response.Ok]?.(user)
    : getStarted[response.Error]?.()
}

const pull = middleware(function (getStarted) {
  getUser(getStarted)
})

export default {
  pull
}
