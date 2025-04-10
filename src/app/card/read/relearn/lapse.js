class Lapse {
  #data;

  constructor(data) {
    this.#data = data;
  }

  incOne() {
    this.#data.lapse = this.#data.lapse + 1;
    return this;
  }

  zero() {
    this.#data.lapse = 0;
    return this;
  }

  static from(data) {
    return new Lapse(data);
  }
}

export default Lapse;
