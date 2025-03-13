import cache from "./cache";
import pending from "./pending";
import ttl from "./ttl";

async function runLock(key, fn, validity = ttl.TEN_MINUTES) {
  if (isCacheValid(key)) return cache.get(key).value;
  if (pending.has(key)) return pending.get(key);

  return executeAndCache(key, fn, validity);
}

function isCacheValid(key) {
  if (!cache.has(key)) return false;

  const { expires } = cache.get(key);
  const isValid = Date.now() < expires;

  if (!isValid) cache.delete(key);

  return isValid;
}

function executeAndCache(key, fn, validity) {
  const promise = fn()
    .then((result) => {
      cache.set(key, { value: result, expires: Date.now() + validity });
      return result;
    })
    .finally(() => pending.delete(key));

  pending.set(key, promise);
  return promise;
}

export default runLock;
