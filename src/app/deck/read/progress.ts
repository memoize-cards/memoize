import Card from "./card";

class Progress {
  #learn;
  #relearn;
  #review;
  #total;

  @Progress.asPercentageOfTotal
  get learn() {
    return (this.#learn ??= 0);
  }

  @Progress.asPercentageOfTotal
  get relearn() {
    return (this.#relearn ??= 0);
  }

  @Progress.asPercentageOfTotal
  get review() {
    return (this.#review ??= 0);
  }

  get total() {
    return (this.#total ??= 0);
  }

  constructor(learn, review, relearn, total) {
    this.#learn = learn;
    this.#review = review;
    this.#relearn = relearn;
    this.#total = total;
  }

  static from(data) {
    const {
      1: learn = [],
      2: review = [],
      3: relearn = [],
    } = data.map(Card.from).group((card) => card.type);
    return new Progress(
      learn.length,
      review.length,
      relearn.length,
      data.length,
    );
  }

  static asPercentageOfTotal(_target, _key, descriptor) {
    const count = descriptor.get;

    Object.assign(descriptor, {
      get() {
        return this.total
          ? Math.round((count.call(this) / this.total) * 100)
          : 0;
      },
    });

    return descriptor;
  }
}

export default Progress;
