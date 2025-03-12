const User = {
  async resetPasswordForEmail(email) {
    const { resetPasswordForEmail } = await import("artifact/supabase");
    const { data: user } = await resetPasswordForEmail(email);
    return user;
  },
};

export default User;
