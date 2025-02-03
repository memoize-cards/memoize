import { urlFor } from "standard/router";

const User = {
  async updateUser(data) {
    const { default: supabase } = await import("artifact/supabase");
    const { data: user } = await supabase.auth.updateUser(data);
    return user;
  },
};

export default User;
