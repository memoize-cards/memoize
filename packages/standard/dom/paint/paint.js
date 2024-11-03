import {
  didPaintCallback,
  paintCallback,
  willPaintCallback,
} from "standard/dom/lifeCycle";
import intercept, { exec } from "standard/intercept";
import { connectedCallback } from "standard/lifeCycle";

const paint =
  (component, style = () => []) =>
  (target) => {
    intercept(paintCallback)
      .in(target.prototype)
      .then(async function () {
        const render = (resolve) => {
          requestAnimationFrame(async () => {
            (this.shadowRoot ?? document).adoptedStyleSheets =
              await style(this);
            (this.shadowRoot ?? this).innerHTML = await component(this);
            this.isPainted = true;
            resolve();
          });
        };

        await this[willPaintCallback]?.();
        await new Promise(render);
        await this[didPaintCallback]?.();
      });

    intercept(connectedCallback).in(target.prototype).then(exec(paintCallback));
  };

export default paint;
