import { urlFor } from "standard/router";

const User = {
  async signInWithOAuth() {
    const { default: supabase } = await import("artifact/supabase");
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: urlFor("dashboard") },
    });
    return User;
  },

  async signInWithPassword(data) {
    const { default: supabase } = await import("artifact/supabase");
    const { data: user } = await supabase.auth.signInWithPassword(data);
    return user;
  },
};

export default User;
