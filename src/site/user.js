const User = {
  async isItAuthenticated() {
    const { default: supabase } = await import("artifact/supabase");
    const { data } = await supabase.auth.getSession();
    return !!data?.session?.user;
  },
};

export default User;
