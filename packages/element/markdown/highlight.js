import highlight from "highlight.js/styles/atom-one-dark.css?inline";
import { css } from "standard/dom";

function style() {
  return css`
    ${highlight}
  `;
}

export default style;
