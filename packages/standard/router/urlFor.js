import listeners from "./listeners";

function urlFor(name, params) {
  const keys = /:(?<key>\w+)/g;
  const { path } = listeners.find(({ page }) => page.name === name) ?? {
    path: "#",
  };
  return location.origin + path.replace(keys, (_, key) => params[key]);
}

export default urlFor;
