const User = {
  async isItAuthenticated() {
    const { getSession } = await import("artifact/supabase");
    const { data } = await getSession();
    return Boolean(data?.session?.user);
  },
};

export default User;
