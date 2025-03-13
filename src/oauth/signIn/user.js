const User = {
  async isItAuthenticated() {
    const { getSession } = await import("artifact/supabase");
    const { data } = await getSession();
    return Boolean(data?.session?.user);
  },

  async signInWithOAuth() {
    const { signInWithOAuth } = await import("artifact/supabase");
    signInWithOAuth();
    return User;
  },

  async signInWithPassword(data) {
    const { signInWithPassword } = await import("artifact/supabase");
    const { data: user } = await signInWithPassword(data);
    return user;
  },
};

export default User;
