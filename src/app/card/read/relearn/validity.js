class Validity {
  #data;

  constructor(data) {
    this.#data = data;
  }

  reschedule() {
    this.#data.validity = new Date().getTime() + this.#data.interval;
    return this;
  }

  static from(data) {
    return new Validity(data);
  }
}

export default Validity;
