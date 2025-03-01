const Type = {
  from(value = 0) {
    return [
      { color: "master", value: "Novo" },
      { color: "warning", value: "Aprendendo" },
      { color: "success", value: "Revisando" },
      { color: "danger", value: "Reaprendendo" },
    ][value];
  },
};

export default Type;
