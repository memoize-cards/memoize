import formatStudyTime from "./formatStudyTime";

class User {
  #data = {};

  get avatar() {
    return this.#data?.avatar_url;
  }

  get name() {
    return this.#data?.full_name ?? this.#data.name;
  }

  get reviewTime() {
    return formatStudyTime(this.#data?.reviewTime ?? 0);
  }

  constructor(data) {
    this.#data = data;
  }

  static async logged() {
    const { getUserLogged } = await import("artifact/supabase");
    const {
      data: { user_metadata },
    } = await getUserLogged();
    return new User(user_metadata);
  }
}

export default User;
