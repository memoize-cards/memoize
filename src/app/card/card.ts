import { valueOf } from "standard/interface";
import { params } from "standard/router";
import Deck from "./deck";
import Progress from "./progress";
import Validity from "./validity";

class Card {
  #data;
  #deck;
  #progress;

  get back() {
    return (async () => {
      const { default: showdown } = await import("artifact/showdown");
      return showdown.makeHtml(this.#data?.back);
    })();
  }

  get cover() {
    return this.#data?.cover;
  }

  get deck() {
    return (this.#deck ??= Deck.from(this.#data?.deck));
  }

  get front() {
    return this.#data?.front;
  }

  get id() {
    return this.#data?.id;
  }

  get type() {
    return this.#progress?.type;
  }

  constructor(data) {
    this.#data = data;
    this.#progress = Progress.from((this.#data.progress ??= {}));
  }

  @Card.#update
  async again() {
    this.#progress.again();
    return this;
  }

  @Card.#update
  async easy() {
    this.#progress.easy();
    return this;
  }

  @Card.#update
  async good() {
    this.#progress.good();
    return this;
  }

  @Card.#update
  async hard() {
    this.#progress.hard();
    return this;
  }

  [valueOf]() {
    return {
      ...this.#data.progress,
      easyFactor: this.#progress.easyFactor,
      interval: this.#progress.interval,
      lapse: this.#progress.lapse,
      type: this.#progress.type,
      validity: this.#progress.validity,
    };
  }

  static #update(_target, _key, descriptor) {
    const method = descriptor.value;

    Object.assign(descriptor, {
      async value() {
        method.call(this);
        const { upsertProgress } = await import("artifact/supabase");
        await upsertProgress(this[valueOf]());
        return this;
      },
    });

    return descriptor;
  }

  static async current() {
    const { getUserLogged, validCard } = await import("artifact/supabase");
    const { data: user } = await getUserLogged();
    const { data: card } = await validCard(
      Validity.expired,
      params.deck,
      user.id,
    );
    return new Card(card);
  }
}

export default Card;
