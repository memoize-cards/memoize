class Decks {
  #data;

  get length() {
    return this.#data?.length ?? 0;
  }

  constructor(data) {
    this.#data = data;
  }

  static async ofUserLogged() {
    const { decksOfUser, getUserLogged } = await import("artifact/supabase");
    const { data: user } = await getUserLogged();
    const { data: decks } = await decksOfUser(user.id);
    return new Decks(decks);
  }
}

export default Decks;
