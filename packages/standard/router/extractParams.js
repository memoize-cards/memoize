import params from "./params";

function extractParams(path) {
  const keys = path?.split("/");
  const values = location.pathname.split("/");
  Object.keys(params).forEach((key) => delete params[key]);
  keys?.forEach(
    (key, i) => /^:/.test(key) && Reflect.set(params, key.slice(1), values[i]),
  );
}

export default extractParams;
