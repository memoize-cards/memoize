const css = (strings, ...values) => {
  const styleSheet = new CSSStyleSheet();
  const cssText = String.raw({ raw: strings }, ...values);
  styleSheet.replaceSync(cssText);
  return [styleSheet];
};

export default css;
