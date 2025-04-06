class Deck {
  #value;

  get name() {
    return this.#value ??+ "";
  }

  constructor(value) {
    this.#value = value;
  }

  static from(value) {
    return new Deck(value);
  }
}

export default Deck;
