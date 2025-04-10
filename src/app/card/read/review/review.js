import EasyFactor from "./easyFactor";
import Interval from "./interval";
import Lapse from "./lapse";
import Type from "./type";
import Validity from "./validity";

class Review {
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
    this.#easyFactor.dec20();
    this.#interval.oneDay();
    this.#lapse.one();
    this.#type.relearn();
    this.#validity.reschedule();
    return this;
  }

  easy() {
    this.#easyFactor.inc15();
    this.#interval.xEFxEB();
    this.#validity.reschedule();
    return this;
  }

  good() {
    this.#interval.xEF();
    this.#validity.reschedule();
    return this;
  }

  hard() {
    this.#easyFactor.dec15();
    this.#interval.xHF();
    this.#validity.reschedule();
    return this;
  }

  static from(data) {
    return new Review(data);
  }

  static is(data) {
    return data?.type === Type.REVIEW;
  }
}

export default Review;
