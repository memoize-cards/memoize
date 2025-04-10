import { params } from "standard/router";

const User = {
  get isFromGlobalStudy() {
    return !params.deck;
  },
};

export default User;
