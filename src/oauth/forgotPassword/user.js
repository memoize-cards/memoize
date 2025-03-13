const User = {
  async isItAuthenticated() {
    const { getSession } = await import("artifact/supabase");
    const { data } = await getSession();
    return Boolean(data?.session?.user);
  },

  async resetPasswordForEmail(email) {
    const { resetPasswordForEmail } = await import("artifact/supabase");
    const { data: user } = await resetPasswordForEmail(email);
    return user;
  },
};

export default User;
