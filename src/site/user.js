const User = {
  async isItAuthenticated() {
    const { getSession } = await import("artifact/supabase");
    const { data: session } = await getSession();
    return Boolean(session?.user);
  },
};

export default User;
