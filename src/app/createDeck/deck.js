import Permission from "./permission";

class Deck {
  #data;

  get id() {
    return this.#data.id;
  }

  constructor(data) {
    this.#data = data;
  }

  static async create(data, userId) {
    const { createDeck } = await import("artifact/supabase");
    const { data: deck } = await createDeck({ ...data, user_id: userId });
    const { data: collab } = await addCollab({
      deck: deck.id,
      permission: Permission.OWNER,
      user_id: userId,
    });
    return new Deck(deck);
  }
}

export default Deck;
