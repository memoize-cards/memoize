import { willPaintCallback } from "standard/dom/lifeCycle";
import intercept, { exec } from "standard/intercept";

const willPaint = (target, propertyKey) => {
  return intercept(willPaintCallback).in(target).then(exec(propertyKey));
};

export default willPaint;
