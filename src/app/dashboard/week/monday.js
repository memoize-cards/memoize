import Calendar from "./calendar";
import Today from "./today";

class Sunday {
  #data;

  get number() {
    return new Date(Today.is(Calendar.MONDAY)).getDate();
  }

  get label() {
    return "S";
  }

  get goalAchieved() {
    return this.#data?.goalAchieved ?? false;
  }

  get today() {
    return new Date().getDay() === Calendar.MONDAY;
  }

  constructor(data) {
    this.#data = data;
  }

  static from(days) {
    const date = Today.is(Calendar.MONDAY);
    return new Sunday(days?.find((day) => day.date === date));
  }
}

export default Sunday;
