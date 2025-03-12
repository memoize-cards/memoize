import { urlFor } from "standard/router";
import client from "./client";

function signInWithOAuth() {
  client.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: urlFor("dashboard") },
  });
}

export default signInWithOAuth;
