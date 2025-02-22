function appInstalled(target, propertyKey) {
  const connectedCallback = target.connectedCallback ?? (() => undefined);
  const disconnectedCallback = target.disconnectedCallback ?? (() => undefined);
  const controller = new AbortController();

  Reflect.defineProperty(target, "connectedCallback", {
    value(...args) {
      window.addEventListener("appinstalled", () => this[propertyKey](), {
        signal: controller.signal,
      });
      return Reflect.apply(connectedCallback, this, args);
    },
  });

  Reflect.defineProperty(target, "disconnectedCallback", {
    value(...args) {
      controller.abort();
      return Reflect.apply(disconnectedCallback, this, args);
    },
  });
}

export default appInstalled;
