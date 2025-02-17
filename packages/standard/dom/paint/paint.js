import {
  didPaintCallback,
  paintCallback,
  willPaintCallback,
} from "standard/dom/lifeCycle";
import intercept, { exec } from "standard/intercept";
import { connectedCallback } from "standard/lifeCycle";

const paint =
  (component, ...styles) =>
  (target) => {
    intercept(paintCallback)
      .in(target.prototype)
      .then(async function () {
        const render = (resolve) => {
          requestAnimationFrame(async () => {
            const styleSheets = styles.map((style) => style(this));
            (this.shadowRoot ?? document).adoptedStyleSheets =
              await Promise.all(styleSheets);
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
