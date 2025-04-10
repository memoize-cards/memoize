class Type {
  #data;

  static get REVIEW() {
    return 2;
  }

  constructor(data) {
    this.#data = data;
  }

  relearn() {
    this.#data.type = 3;
    return this;
  }

  static from(data) {
    return new Type(data);
  }
}

export default Type;
