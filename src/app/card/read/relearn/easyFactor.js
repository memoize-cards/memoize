class EasyFactor {
  #data;

  constructor(data) {
    this.#data = data;
  }

  init() {
    this.#data.easyFactor = 2.5;
    return this;
  }

  static from(data) {
    return new EasyFactor(data);
  }
}

export default EasyFactor;
