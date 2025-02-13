import CurrentPage from "./currentPage";
import Navigate from "./navigate";
import Session from "./session";

async function handle() {
  if (CurrentPage.isPublic) return;
  if (await Session.expired) Navigate.goToSignIn();
}

window.addEventListener("popstate", handle);
window.addEventListener("pushstate", handle);

handle();
