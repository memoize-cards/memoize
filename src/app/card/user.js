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
    const { updateUserMetaData } = await import("artifact/supabase");
    await updateUserMetaData(this.#data.user_metadata);
    return this;
  }

  static async logged() {
    const { getUserLogged } = await import("artifact/supabase");
    const { data: user } = await getUserLogged();
    return new User(user);
  }
}

export default User;
