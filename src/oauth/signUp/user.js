const User = {
  async SignUp(data) {
    const { email, password, name } = data;
    const { default: supabase } = await import("artifact/supabase");
    const { data: user } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });
    return suer;
  },
};

export default User;
