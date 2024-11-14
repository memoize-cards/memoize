class User {
  #data;

  get id() {
    return this.#data.id;
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
