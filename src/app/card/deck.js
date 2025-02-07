class Deck {
  #data;

  get id() {
    return this.#data.id;
  }

  get name() {
    return this.#data.name;
  }

  constructor(data) {
    this.#data = data;
  }

  static from(data) {
    return new Deck(data);
  }
}

export default Deck;
