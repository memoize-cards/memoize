import EasyFactor from "./easyFactor";
import Interval from "./interval";
import Type from "./type";
import Validity from "./validity";

class Learn {
  #data;
  #easyFactor;
  #interval;
  #type;
  #validity;

  constructor(data) {
    this.#data = data;
    this.#easyFactor = EasyFactor.from(this.#data);
    this.#interval = Interval.from(this.#data);
    this.#type = Type.from(this.#data);
    this.#validity = Validity.from(this.#data);
  }

  again() {
    this.#interval.temMinutes();
    this.#validity.reschedule();
    return this;
  }

  easy() {
    this.#easyFactor.init();
    this.#interval.fourDays();
    this.#type.review();
    this.#validity.reschedule();
    return this;
  }

  good() {
    this.#easyFactor.init();
    this.#interval.oneDay();
    this.#type.review();
    this.#validity.reschedule();
    return this;
  }

  hard() {
    this.#interval.twelveHours();
    this.#validity.reschedule();
    return this;
  }

  static from(data) {
    return new Learn(data);
  }

  static is(data) {
    return data?.type === Type.LEARN;
  }
}

export default Learn;
