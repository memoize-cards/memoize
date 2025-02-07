import EasyFactor from "./easyFactor";
import Interval from "./interval";
import Lapse from "./lapse";
import Type from "./type";
import Validity from "./validity";

class Relearn {
  #data;
  #easyFactor;
  #interval;
  #lapse;
  #type;
  #validity;

  constructor(data) {
    this.#data = data;
    this.#easyFactor = EasyFactor.from(this.#data);
    this.#interval = Interval.from(this.#data);
    this.#lapse = Lapse.from(this.#data);
    this.#type = Type.from(this.#data);
    this.#validity = Validity.from(this.#data);
  }

  again() {
    this.#lapse.incOne();
    this.#interval.temMinutes();
    this.#validity.reschedule();
    return this;
  }

  easy() {
    this.#easyFactor.init();
    this.#interval.fourDays();
    this.#lapse.zero();
    this.#type.review();
    this.#validity.reschedule();
    return this;
  }

  good() {
    this.#easyFactor.init();
    this.#interval.oneDay();
    this.#lapse.zero();
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
    return new Relearn(data);
  }

  static is(data) {
    return data.type === Type.RELEARN;
  }
}

export default Relearn;
