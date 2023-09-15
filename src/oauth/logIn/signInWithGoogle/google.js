import supabase from '@artifact/supabase'

const google = {
  signIn () {
    supabase.auth.signInWithOAuth({ provider: 'google' })
    return this
  }
}

export default google
