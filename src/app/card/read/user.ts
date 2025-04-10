import { valueOf } from "standard/interface";
import Timer from "./timer";

class User {
  #data = {};
  #timer;

  get reviewTime() {
    return (this.#data.reviewTime ||= 0);
  }

  set reviewTime(value) {
    this.#data.reviewTime = this.reviewTime + value;
  }

  constructor(data) {
    this.#data = data;
  }

  beginReview() {
    this.#timer = Timer.now();
    return this;
  }

  @User.#update
  endReview() {
    this.reviewTime = this.#timer.stop().elapsed;
    return this;
  }

  [valueOf]() {
    return { ...this.#data };
  }

  static async logged() {
    const { getUserMetaData } = await import("artifact/supabase");
    const { data: metaData } = await getUserMetaData();
    return new User(metaData);
  }

  static #update(_target, _key, descriptor) {
    const method = descriptor.value;

    Object.assign(descriptor, {
      async value() {
        method.call(this);
        const { updateUserMetaData } = await import("artifact/supabase");
        await updateUserMetaData(this[valueOf]());
        return this;
      },
    });

    return descriptor;
  }
}

export default User;
