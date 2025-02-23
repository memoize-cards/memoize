class User {
  #data = {};

  get avatar() {
    return this.#data?.user_metadata?.avatar_url;
  }

  get id() {
    return this.#data?.id;
  }

  get name() {
    const { full_name, name } = this.#data?.user_metadata ?? {};
    return full_name ?? name;
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
