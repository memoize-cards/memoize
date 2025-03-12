const User = {
  async SignUp(data) {
    const { signUp } = await import("artifact/supabase");
    const { data: user } = await signUp(data);
    return user;
  },
};

export default User;
