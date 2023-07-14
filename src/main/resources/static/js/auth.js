import { Authorizer } from "@authorizerdev/authorizer-js";

const authRef = new Authorizer({
  authorizerURL: "https://authorizer-production-cb42.up.railway.app",
  redirectURL: "http://app.heroku.com/app",
});

async function main() {
  await authRef.login({
    email: "foo@bar.com",
    password: "test",
  });
}