const html = (strings, ...values) => {
  const combinedValues = values.map((value) => [].concat(value).join(""));
  const content = String.raw({ raw: strings }, ...combinedValues);
  return content
    .replace(/[\n\r]+/g, "")
    .replace(/\s+/g, " ")
    .replace(/>\s+</g, "><")
    .trim();
};

export default html;
