import { paintCallback } from "standard/dom/lifeCycle";

const repaint = (_target, _propertyKey, descriptor) => {
  if (descriptor.set) {
    const originalSetter = descriptor.set;

    Object.assign(descriptor, {
      async set(value) {
        await Reflect.apply(originalSetter, this, [value]);

        if (this.isPainted) {
          await this[paintCallback]?.();
        }
      },
    });
  }

  if (descriptor.value) {
    const originalValue = descriptor.value;

    Object.assign(descriptor, {
      async value(...args) {
        await Reflect.apply(originalValue, this, args);

        if (this.isPainted) {
          await this[paintCallback]?.();
        }

        return this;
      },
    });
  }
};

export default repaint;
