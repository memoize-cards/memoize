const Type = {
  map(n) {
    return (
      {
        1: "learn",
        2: "review",
        3: "relearn",
      }[n] ?? "learn"
    );
  },
};

export default Type;
