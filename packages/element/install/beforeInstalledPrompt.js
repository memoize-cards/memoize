function beforeInstallPrompt(target, propertyKey) {
  const connectedCallback = target.connectedCallback ?? (() => undefined);
  const disconnectedCallback = target.disconnectedCallback ?? (() => undefined);
  const controller = new AbortController();

  console.log("beforeInstallPrompt");

  Reflect.defineProperty(target, "connectedCallback", {
    value(...args) {
      console.log("connectedCallback");
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
      console.log("disconnectedCallback");
      controller.abort();
      return Reflect.apply(disconnectedCallback, this, args);
    },
  });
}

export default beforeInstallPrompt;
