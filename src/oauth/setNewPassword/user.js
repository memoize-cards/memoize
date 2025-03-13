const User = {
  async isItAuthenticated() {
    const { getSession } = await import("artifact/supabase");
    const { data } = await getSession();
    return Boolean(data?.session?.user);
  },

  async updateUser(data) {
    const { updateUser } = await import("artifact/supabase");
    const { data: user } = await updateUser(data);
    return user;
  },
};

export default User;
