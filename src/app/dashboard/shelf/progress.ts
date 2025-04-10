import percentageOfTotal from "./percentageOfTotal";
import splitCardsByLearningState from "./splitCardsByLearningState";

class Progress {
  #data;

  @Progress.asPercentageOfTotal
  get learn() {
    return (this.#data.learn ??= 0);
  }

  get mastered() {
    return (this.#data.review ??= 0);
  }

  @Progress.asPercentageOfTotal
  get relearn() {
    return (this.#data.relearn ??= 0);
  }

  @Progress.asPercentageOfTotal
  get review() {
    return (this.#data.review ??= 0);
  }

  get total() {
    return Object.values(this.#data).reduce((x, y) => x + y);
  }

  constructor(data) {
    this.#data = data;
  }

  static from(data) {
    const states = splitCardsByLearningState(data);
    return new Progress(states);
  }

  static asPercentageOfTotal(_target, _key, descriptor) {
    const count = descriptor.get;

    Object.assign(descriptor, {
      get() {
        return percentageOfTotal(count.call(this), this.total);
      },
    });

    return descriptor;
  }
}

export default Progress;
