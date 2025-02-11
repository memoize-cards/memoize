import { urlFor } from "standard/router";

const User = {
  async signOut() {
    const { default: supabase } = await import("artifact/supabase");
    await supabase.auth.signOut({ scope: "local" });
    return User;
  },
};

export default User;
