import { valueOf } from "standard/interface";
import Timer from "./timer";

class Habit {
  #data = {};
  #timer;

  get date() {
    return new Date().setHours(0, 0, 0, 0);
  }

  get goalAchieved() {
    return this.reviewTime >= 10 * 60 * 1000;
  }

  get reviewTime() {
    return (this.#data.reviewTime ||= 0);
  }

  set reviewTime(value) {
    this.#data.reviewTime = this.reviewTime + value;
  }

  constructor(data) {
    this.#data = data || {};
  }

  beginReview() {
    this.#timer = Timer.now();
    return this;
  }

  @Habit.#upsert
  endReview() {
    this.reviewTime = this.#timer.stop().elapsed;
    return this;
  }

  [valueOf]() {
    return {
      ...this.#data,
      date: this.date,
      reviewTime: this.reviewTime,
      goalAchieved: this.goalAchieved,
    };
  }

  static async ofToday() {
    const today = new Date().setHours(0, 0, 0, 0);
    const { getUserLogged, habitOfToday } = await import("artifact/supabase");
    const { data: user } = await getUserLogged();
    const { data: habit } = await habitOfToday(today, user.id);
    return new Habit(habit);
  }

  static #upsert(_target, _key, descriptor) {
    const method = descriptor.value;

    Object.assign(descriptor, {
      async value() {
        method.call(this);
        const { upsertHabit } = await import("artifact/supabase");
        await upsertHabit(this[valueOf]());
        return this;
      },
    });

    return descriptor;
  }
}

export default Habit;
