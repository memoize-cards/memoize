import Calendar from "./calendar";
import Today from "./today";

class Sunday {
  #data;

  get number() {
    return new Date(Today.is(Calendar.THURSDAY)).getDate();
  }

  get label() {
    return "Q";
  }

  get goalAchieved() {
    return this.#data?.goalAchieved ?? false;
  }

  get today() {
    return new Date().getDay() === Calendar.THURSDAY;
  }

  constructor(data) {
    this.#data = data;
  }

  static from(days) {
    const date = Today.is(Calendar.THURSDAY);
    return new Sunday(days?.find((day) => day.date === date));
  }
}

export default Sunday;
