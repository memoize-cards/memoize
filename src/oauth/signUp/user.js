const User = {
  async isItAuthenticated() {
    const { getSession } = await import("artifact/supabase");
    const { data } = await getSession();
    return Boolean(data?.session?.user);
  },

  async SignUp(data) {
    const { signUp } = await import("artifact/supabase");
    const { data: user } = await signUp(data);
    return user;
  },
};

export default User;
