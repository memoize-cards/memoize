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

  async endReview() {
    this.reviewTime = this.#timer.stop().elapsed;
    const { default: supabase } = await import("artifact/supabase");
    await supabase.from("habit").upsert(
      [
        {
          ...this.#data,
          date: this.date,
          reviewTime: this.reviewTime,
          goalAchieved: this.goalAchieved,
        },
      ],
      { onConflict: ["id"] },
    );
    return this;
  }

  static async ofToday() {
    const today = new Date().setHours(0, 0, 0, 0);
    const { getUserLogged, habitOfToday } = await import("artifact/supabase");
    const { data: user } = await getUserLogged();
    const { data: habit } = await habitOfToday(today, user.id);
    return new Habit(habit);
  }
}

export default Habit;
