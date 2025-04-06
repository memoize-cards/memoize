import Progress from "./progress";

class Deck {
  #cards;
  #data;

  get progress() {
    return (this.#cards ??= Progress.from(this.#data.cards));
  }

  get cover() {
    return this.#data.cover;
  }

  get id() {
    return this.#data.id;
  }

  get name() {
    return this.#data.name;
  }

  constructor(data) {
    this.#data = data;
  }

  static async ofUserLogged() {
    const { decksOfUser, getUserLogged } = await import("artifact/supabase");
    const { data: user } = await getUserLogged();
    const { data: decks } = await decksOfUser(user.id);
    return decks.map((deck) => new Deck(deck));
  }
}

export default Deck;
