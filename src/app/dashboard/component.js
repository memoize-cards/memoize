import "./empty";
import "./footer";
import "./header";
import "./profile";
import "./shelf";
import "./study";

import { html } from "standard/dom";

function component() {
  return html`
    <memo-dashboard-header></memo-dashboard-header>
    <memo-main>
      <app>
        <memo-dashboard-profile></memo-dashboard-profile>
        <memo-dashboard-study></memo-dashboard-study>
        <memo-dashboard-shelf></memo-dashboard-shelf>
        <memo-dashboard-empty></memo-dashboard-empty>
      </app>      
    </memo-main>
    <memo-dashboard-footer></memo-dashboard-footer>
  `;
}

export default component;
