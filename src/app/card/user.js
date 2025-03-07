import Timer from "./timer";

class User {
  #data = {};
  #timer;

  get id() {
    return this.#data?.id;
  }

  get reviewTime() {
    return (this.#data.user_metadata.reviewTime ||= 0);
  }

  set reviewTime(value) {
    this.#data.user_metadata.reviewTime = this.reviewTime + value;
  }

  constructor(data) {
    this.#data = data;
  }

  beginReview() {
    this.#timer = Timer.now();
    return this;
  }

  async endReview() {
    this.reviewTime = this.#timer.stop().elapsed;
    const { default: supabase } = await import("artifact/supabase");
    await supabase.auth.updateUser({ data: this.#data.user_metadata });
    return this;
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
