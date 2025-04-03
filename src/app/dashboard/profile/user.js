import formatStudyTime from "./formatStudyTime";

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

  get reviewTime() {
    return formatStudyTime(this.#data?.user_metadata?.reviewTime ?? 0);
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
