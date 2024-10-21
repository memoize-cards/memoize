const dispatchEvent = (eventName) => (_target, _propertyKeyKey, descriptor) => {
  const originalSet = descriptor.set ?? (() => undefined);
  const originalValue = descriptor.value ?? (() => undefined);

  if (descriptor.set) {
    Object.assign(descriptor, {
      async set(value) {
        await Reflect.apply(originalSet, this, [value]);

        if (this.isConnected) {
          this.dispatchEvent(
            new CustomEvent(eventName, {
              bubbles: true,
              cancelable: true,
              detail: value,
            }),
          );
        }
      },
    });
  }

  if (descriptor.value) {
    Object.assign(descriptor, {
      async value(...args) {
        const output = await Reflect.apply(originalValue, this, args);

        this.dispatchEvent(
          new CustomEvent(eventName, {
            bubbles: true,
            cancelable: true,
            detail: output,
          }),
        );

        return this;
      },
    });
  }
};

export default dispatchEvent;
