class Template {
  #form;

  get content() {
    return this.#form.querySelector("template")?.innerHTML ?? "";
  }

  constructor(form) {
    this.#form = form;
  }

  static from(form) {
    return new Template(form);
  }
}

export default Template;
