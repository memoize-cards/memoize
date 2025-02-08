const filters = {
  equals: (x, y) => x == y,

  different: (x, y) => x != y,

  gt: (x, y) => x > y,

  gte: (x, y) => x >= y,

  len: (x) => Object.keys(x)?.length,

  lt: (x, y) => x < y,

  lte: (x, y) => x <= y,

  not: (x) => !x,

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
