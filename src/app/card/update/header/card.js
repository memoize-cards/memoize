import { params } from "standard/router";

const Deck = {
  async delete() {
    const { deleteCardOfId } = await import("artifact/supabase");
    await deleteCardOfId(params.card);
    return Deck;
  },
};

export default Deck;
