import supabase from '@artifact/supabase'

class User {
  static get id () {
    return (async () => {
      const { data } = await supabase.auth.getUser()
      return data.user.id
    })()
  }
}

export default User
