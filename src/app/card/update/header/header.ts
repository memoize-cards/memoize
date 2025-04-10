import { define } from "directive";
import { paint } from "standard/dom";
import on, { stop } from "standard/event";
import Card from "./card";
import component from "./component";
import Navigate from "./navigate";

@define("m-edit-card-header")
@paint(component)
class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.click("#delete", stop)
  async delete() {
    await Card.delete();
    Navigate.goToDeck();
    return this;
  }
}
export default Header;
