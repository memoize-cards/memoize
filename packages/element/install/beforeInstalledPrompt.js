function beforeInstallPrompt(target, propertyKey) {
  const connectedCallback = target.connectedCallback ?? (() => undefined);
  const disconnectedCallback = target.disconnectedCallback ?? (() => undefined);
  const controller = new AbortController();

  Reflect.defineProperty(target, "coonectedCallback", {
    value(...args) {
      window.addEventListener(
        "beforeinstallprompt",
        (event) => {
          console.log("beforeinstallprompt", event);
          event.preventDefault();
          this[propertyKey](event);
        },
        {
          signal: controller.signal,
        },
      );
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

export default beforeInstallPrompt;
