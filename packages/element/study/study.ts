import { attributeChanged, define } from "directive";
import { paint, repaint, willPaint } from "standard/dom";
import on, { stop } from "standard/event";
import component from "./component";
import { hydrate } from "./interfaces";
import Navigate from "./navigate";
import style from "./style";
import timeUntilReview from "./timeUntilReview";

@define("memo-study")
@paint(component, style)
class Study extends HTMLElement {
  #deckId;
  #userId;
  #value;

  @attributeChanged("deck-id")
  @repaint
  set deck(value) {
    this.#deckId = value;
  }

  @attributeChanged("user-id")
  @repaint
  set user(value) {
    this.#userId = value;
  }

  get value() {
    return (this.#value ??= "");
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.click(":host button", stop)
  click() {
    Navigate.goToCard(this.#deckId);
    return this;
  }

  @willPaint
  async [hydrate]() {
    const { default: supabase } = await import("artifact/supabase");
    const { data: card } = await supabase
      .from("card")
      .select("validity")
      .eq("deck", this.#deckId)
      .eq("user_id", this.#userId)
      .order("validity", { ascending: true })
      .limit(1)
      .single();
    this.#value = timeUntilReview(card?.validity);
    return this;
  }
}

export default Study;
