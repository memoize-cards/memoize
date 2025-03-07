import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import component from "./component";
import { hydrate } from "./interfaces";
import Progress from "./progress";
import style from "./style";
import User from "./user";

@define("m-dashboard-profile")
@paint(component, style)
class Profile extends HTMLElement {
  #user;
  #progress;

  get progress() {
    return (this.#progress ??= {});
  }

  get user() {
    return (this.#user ??= {});
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @willPaint
  async [hydrate]() {
    this.#user = await User.logged();
    this.#progress = await Progress.from();
    return this;
  }
}

export default Profile;
