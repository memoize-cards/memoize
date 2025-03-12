import { urlFor } from "standard/router";

const User = {
  async signOut() {
    const { signOut } = await import("artifact/supabase");
    await signOut();
    return User;
  },
};

export default User;
