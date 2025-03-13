class Decks {
  #data;

  get length() {
    return this.#data?.length || 0;
  }

  constructor(data) {
    this.#data = data;
  }

  static async ofUserLogged() {
    const { decksOfUserLogged } = await import("artifact/supabase");
    const { data: decks } = await decksOfUserLogged();
    return new Decks(decks);
  }
}

export default Decks;
