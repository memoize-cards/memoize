const Navigate = {
  go(deck) {
    history.pushState({}, "", urlFor("deck", deck));
    return this;
  },
};

export default Navigate;
