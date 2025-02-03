import { urlFor } from "standard/router";

const User = {
  async resetPasswordForEmail(email) {
    const { default: supabase } = await import("artifact/supabase");
    const { data: user } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: urlFor("setNewPassword"),
    });
    return user;
  },
};

export default User;
