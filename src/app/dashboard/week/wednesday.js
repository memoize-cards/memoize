import Calendar from "./calendar";
import Today from "./today";

class Sunday {
  #data;

  get number() {
    return new Date(Today.is(Calendar.WEDNESDAY)).getDate();
  }

  get label() {
    return "Q";
  }

  get goalAchieved() {
    return this.#data?.goalAchieved ?? false;
  }

  get today() {
    return new Date().getDay() === Calendar.WEDNESDAY;
  }

  constructor(data) {
    this.#data = data;
  }

  static from(days) {
    const date = Today.is(Calendar.WEDNESDAY);
    return new Sunday(days?.find((day) => day.date === date));
  }
}

export default Sunday;
