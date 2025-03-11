import Calendar from "./calendar";
import Today from "./today";

class Sunday {
  #data;

  get number() {
    return new Date(Today.is(Calendar.SUNDAY)).getDate();
  }

  get label() {
    return "D";
  }

  get goalAchieved() {
    return this.#data?.goalAchieved ?? false;
  }

  get today() {
    return new Date().getDay() === Calendar.SUNDAY;
  }

  constructor(data) {
    this.#data = data;
  }

  static from(days) {
    const date = Today.is(Calendar.SUNDAY);
    return new Sunday(days?.find((day) => day.date === date));
  }
}

export default Sunday;
