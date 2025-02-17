class Card {
  #data;

  get front() {
    return (this.#data.front ??= "");
  }

  get id() {
    return this.#data.id;
  }

  constructor(data) {
    this.#data = data;
  }

  static from(data) {
    return data?.map((card) => new Card(card));
  }
}

export default Card;
