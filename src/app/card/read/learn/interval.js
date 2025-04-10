class Interval {
  #data;

  constructor(data) {
    this.#data = data;
  }

  fourDays() {
    this.#data.interval = 4 * 24 * 60 * 60 * 1000;
    return this;
  }

  oneDay() {
    this.#data.interval = 1 * 24 * 60 * 60 * 1000;
    return this;
  }

  temMinutes() {
    this.#data.interval = 10 * 60 * 1000;
    return this;
  }

  twelveHours() {
    this.#data.interval = 12 * 60 * 60 * 1000;
    return this;
  }

  static from(data) {
    return new Interval(data);
  }
}

export default Interval;
