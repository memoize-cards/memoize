const env = new Proxy(
  {},
  {
    get: (_target, key) => import.meta.env.MODE === key,
  },
);

export default env;
