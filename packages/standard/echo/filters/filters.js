const filters = {
  equals: (target, value) => target == value,

  different: (target, value) => target != value,

  gt: (target, value) => target > value,

  gte: (target, value) => target >= value,

  len: (target) => Object.keys(target)?.length,

  lt: (target, value) => target < value,

  lte: (target, value) => target <= value,

  not: (target) => !target,

  prop: (target, path) => {
    try {
      return new Function(
        "target",
        `return target${/^\[/.test(path) ? "" : "."}${path}`,
      )(target);
    } catch (_error) {
      return undefined;
    }
  },
};

export default filters;
