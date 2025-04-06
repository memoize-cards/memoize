class User {
  #data;

  get id() {
    return this.#data.id;
  }

  constructor(data) {
    this.#data = data;
  }

  static async logged() {
    const { getUserLogged } = await import("artifact/supabase");
    const { data: user } = await getUserLogged();
    return new User(user);
  }
}

export default User;
