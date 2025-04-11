const User = {
  async isItAuthenticated() {
    const { getSession } = await import("artifact/supabase");
    const { data: session } = await getSession();
    return Boolean(session?.user);
  },

  async updateUser(data) {
    const { updateUserMetaData } = await import("artifact/supabase");
    const { data: user } = await updateUserMetaData(data);
    return user;
  },
};

export default User;
