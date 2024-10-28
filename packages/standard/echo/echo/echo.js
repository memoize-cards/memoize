import filters from "standard/echo/filters";
import { dispatchEvent, id, on } from "standard/echo/interfaces";
import {
  echoConnectedCallback,
  echoDisconnectedCallback,
} from "standard/echo/lifeCycle";
import { target } from "standard/echo/target";
import {
  attributeChangedCallback,
  disconnectedCallback,
  observedAttributes,
} from "standard/lifeCycle";

const Echo = (Klass) =>
  class extends Klass {
    #controllers = {};

    static [observedAttributes] = [...(Klass[observedAttributes] ?? []), on];

    [attributeChangedCallback](name, oldValue, newValue) {
      super[attributeChangedCallback]?.(name, oldValue, newValue);
      if (name === on) {
        this[echoDisconnectedCallback](oldValue);
        this[echoConnectedCallback](newValue);
      }
      return this;
    }

    [disconnectedCallback]() {
      super[disconnectedCallback]?.();
      Object.keys(this.#controllers).forEach((protocol) =>
        this[echoDisconnectedCallback](protocol),
      );
      return this;
    }

    [dispatchEvent](event) {
      super[dispatchEvent]?.(event);
      const element = this.getAttribute(id) ?? this.localName;
      target.dispatchEvent(
        new CustomEvent(`${element}/${event.type}`, {
          detail: event.detail,
        }),
      );
    }

    [echoConnectedCallback](protocol) {
      this.#controllers[protocol] = new AbortController();

      const [, topic, type, name, pipes] =
        protocol.match(
          /^([a-z0-9-_]+\/[a-z0-9-_]+):([a-z]+)\/([a-z0-9-_]+)(\|.*)?$/i,
        ) || [];

      const segments = (pipes || "").split("|").filter(Boolean);
      const handlers = segments.map((filter) => {
        const [func, val] = filter.split("=");
        return [filters[func], val];
      });

      target.addEventListener(
        topic,
        (event) => {
          const value = handlers.reduce(
            (accumulated, [func, val]) => func(accumulated, val),
            event.detail,
          );

          if (/^method$/.test(type)) this[name](value);
          if (/^attribute$/.test(type)) this.setAttribute(name, value);
          if (/^setter$/.test(type)) this[name] = value;

          return this;
        },
        { signal: this.#controllers[protocol].signal },
      );

      return this;
    }

    [echoDisconnectedCallback](protocol) {
      this.#controllers[protocol]?.abort();
      return this;
    }
  };

export default Echo;
