import supabase from '@artifact/supabase'

class User {

}

Reflect.defineProperty(User, 'id', {
  get: async function () {
    const { data } = await supabase.auth.getUser()
    return data.user.id
  }
})

export default User
