class Lapse {
  #data;

  constructor(data) {
    this.#data = data;
  }

  one() {
    this.#data.lapse = 1;
    return this;
  }

  static from(data) {
    return new Lapse(data);
  }
}

export default Lapse;
