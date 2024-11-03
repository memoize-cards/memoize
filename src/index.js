import "polyfill";
import "pixel";
import "element";

import "./signIn";
import "./site";

import router from "standard/router";

window.addEventListener("popstate", router.handle);
window.addEventListener("pushstate", router.handle);
router.handle();
