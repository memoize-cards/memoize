import { urlFor } from "standard/router";

const User = {
  async updateUser(data) {
    const { updateUser } = await import("artifact/supabase");
    const { data: user } = await updateUser(data);
    return user;
  },
};

export default User;
