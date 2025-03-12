import { urlFor } from "standard/router";
import client from "./client";

function resetPasswordForEmail(email) {
  return client.auth.resetPasswordForEmail(email, {
    redirectTo: urlFor("setNewPassword"),
  });
}

export default resetPasswordForEmail;
