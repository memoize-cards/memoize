import "./cards";
import "./empty";
import "./footer";
import "./header";
import "./profile";
import "./shelf";
import "./study";
import "./week";

import { html } from "standard/dom";

function component() {
  return html`
    <m-dashboard-header></m-dashboard-header>
    <m-main>
      <app>
        <m-dashboard-profile></m-dashboard-profile>
        <m-dashboard-week></m-dashboard-week>
        <m-dashboard-study></m-dashboard-study>
        <m-stack direction="column" spacing="xs">
          <m-dashboard-cards></m-dashboard-cards>
          <m-dashboard-shelf></m-dashboard-shelf>
        <m-stack>
        <m-dashboard-empty></m-dashboard-empty>
      </app>      
    </m-main>
    <m-dashboard-footer></m-dashboard-footer>
  `;
}

export default component;
