class EasyFactor {
  #data;

  static get #minValue() {
    return 1.3;
  }

  constructor(data) {
    this.#data = data;
  }

  dec20() {
    const value = this.#data.easyFactor - 0.2;
    this.#data.easyFactor = Math.max(value, EasyFactor.#minValue);
    return this;
  }

  inc15() {
    this.#data.easyFactor = this.#data.easyFactor + 0.15;
    return this;
  }

  dec15() {
    const value = this.#data.easyFactor - 0.15;
    this.#data.easyFactor = Math.max(value, EasyFactor.#minValue);
    return this;
  }

  static from(data) {
    return new EasyFactor(data);
  }
}

export default EasyFactor;
