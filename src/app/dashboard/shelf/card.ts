class Card {
  #learn;
  #relearn;
  #review;
  #total;

  @Card.asPercentageOfTotal
  get learn() {
    return (this.#learn ??= 0);
  }

  @Card.asPercentageOfTotal
  get relearn() {
    return (this.#relearn ??= 0);
  }

  @Card.asPercentageOfTotal
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
    } = data.group((card) => card.type);
    return new Card(learn.length, review.length, relearn.length, data.length);
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

export default Card;
