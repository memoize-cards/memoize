import { abortController } from "standard/event/interfaces";
import intercept from "standard/intercept";
import { connectedCallback, disconnectedCallback } from "standard/lifeCycle";

const attachEventListener =
  (type, ...filters) =>
  (target, propertyKey) => {
    intercept(connectedCallback)
      .in(target)
      .then(function () {
        const controller = (this[abortController] ??= new AbortController());
        const options = { signal: controller.signal };

        const listener = (event) => {
          this[propertyKey](
            filters.reduce((target, filter) => filter(target), event),
          );
        };

        this.parentElement.addEventListener(type, listener, options);
      });

    intercept(disconnectedCallback)
      .in(target)
      .then(function () {
        this[abortController].abort();
      });
  };

const relay = new Proxy(
  {},
  {
    get:
      (_, type) =>
      (...filters) =>
        attachEventListener(type, ...filters),
  },
);

export default relay;
