const joinCut = (method) => {
  return (_target, _propertyKey, descriptor) => {
    const type = descriptor.set ? "set" : "value";
    const substituted = descriptor[type] ?? (() => undefined);

    Object.assign(descriptor, {
      async [type](...args) {
        const output = await Reflect.apply(substituted, this, args);
        await this[method]?.(...args);
        return output;
      },
    });
  };
};

export default joinCut;
