import "./empty";
import "./footer";
import "./header";
import "./profile";
import "./shelf";
import "./study";

import { html } from "standard/dom";

function component() {
  return html`
    <m-dashboard-header></m-dashboard-header>
    <m-main>
      <app>
        <m-dashboard-profile></m-dashboard-profile>
        <m-dashboard-study></m-dashboard-study>
        <m-dashboard-shelf></m-dashboard-shelf>
        <m-dashboard-empty></m-dashboard-empty>
      </app>      
    </m-main>
    <m-dashboard-footer></m-dashboard-footer>
  `;
}

export default component;
