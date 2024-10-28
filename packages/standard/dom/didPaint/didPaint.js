import { didPaintCallback } from "standard/dom/lifeCycle";
import intercept, { exec } from "standard/intercept";

const didPaint = (target, propertyKey) => {
  return intercept(didPaintCallback).in(target).then(exec(propertyKey));
};

export default didPaint;
