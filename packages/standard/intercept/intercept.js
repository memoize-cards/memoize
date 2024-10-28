const intercept = (propertyKey) => ({
  in: (target) => ({
    then: (substituent) => {
      const originalMethod = target[propertyKey] ?? (() => undefined);

      Reflect.defineProperty(target, propertyKey, {
        async value(...args) {
          await Reflect.apply(originalMethod, this, args);
          await Reflect.apply(substituent, this, args);
          return this;
        },
        writable: true,
      });
    },
  }),
});

export default intercept;
