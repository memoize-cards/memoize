class User {
  #data;

  get avatar() {
    return this.#data?.user_metadata?.avatar_url;
  }

  get name() {
    return this.#data?.user_metadata?.full_name;
  }

  constructor(data) {
    this.#data = data;
  }

  static async logged() {
    const { default: supabase } = await import("artifact/supabase");
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return new User(user);
  }
}

export default User;
