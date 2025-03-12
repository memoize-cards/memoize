import client from "./client";

function SignUp(data) {
  const { email, password, name } = data;
  return client.auth.signUp({
    email,
    password,
    options: { data: { name } },
  });
}

export default signUp;
