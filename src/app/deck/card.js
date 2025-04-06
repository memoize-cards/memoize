class Card {
  #progress;

  get type() {
    return this.#progress?.type ?? 1;
  }

  constructor(progress) {
    this.#progress = progress;
  }

  static from(data) {
    const {
      progress: [progress] = [{}],
    } = data ?? {};
    return new Card(progress);
  }
}

export default Card;
