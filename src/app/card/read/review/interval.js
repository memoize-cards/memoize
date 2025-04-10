import EasyBonus from "./easyBonus";
import HardFactor from "./hardFactor";

class Interval {
  #data;

  static get #oneYear() {
    return 365 * 24 * 60 * 60 * 1000;
  }

  constructor(data) {
    this.#data = data;
  }

  oneDay() {
    this.#data.interval = 1 * 24 * 60 * 60 * 1000;
    return this;
  }

  xEFxEB() {
    const value = this.#data.interval * this.#data.easyFactor * EasyBonus.value;
    this.#data.interval = Math.min(value, Interval.#oneYear);
    return this;
  }

  xEF() {
    const value = this.#data.interval * this.#data.easyFactor;
    this.#data.interval = Math.min(value, Interval.#oneYear);
    return this;
  }

  xHF() {
    const value = this.#data.interval * HardFactor.value;
    this.#data.interval = Math.min(value, Interval.#oneYear);
    return this;
  }

  static from(data) {
    return new Interval(data);
  }
}

export default Interval;
