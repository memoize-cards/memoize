import { params } from "standard/router";

const Deck = {
  async delete() {
    const { default: supabase } = await import("artifact/supabase");
    return supabase.from("card").delete().eq("id", params.card);
  },
};

export default Deck;
