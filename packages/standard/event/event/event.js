import { abortController } from "standard/event/interfaces";
import intercept from "standard/intercept";
import { connectedCallback, disconnectedCallback } from "standard/lifeCycle";

const attachEventListener =
  (type, query, ...filters) =>
  (target, propertyKey) => {
    intercept(connectedCallback)
      .in(target)
      .then(function () {
        const controller = (this[abortController] ??= new AbortController());
        const options = { signal: controller.signal };

        const listener = (event) => {
          if (event.target.matches(query)) {
            this[propertyKey](
              filters.reduce((target, filter) => filter(target), event),
            );
          }
        };

        this.shadowRoot?.addEventListener(type, listener, options);
      });

    intercept(disconnectedCallback)
      .in(target)
      .then(function () {
        this[abortController].abort();
      });
  };

const event = new Proxy(
  {},
  {
    get:
      (_, type) =>
      (query, ...filters) =>
        attachEventListener(type, query, ...filters),
  },
);

export default event;
