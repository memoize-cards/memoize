const label = {
  from(textField) {
    const target = {};

    return {
      get innerText() {
        if (textField.isPainted) {
          return textField.shadowRoot.querySelector("label").innerText;
        }

        return target.innerText;
      },

      set innerText(value) {
        if (textField.isPainted) {
          textField.shadowRoot.querySelector("label").innerText = value;
          return;
        }

        target.innerText = value;
      },

      get for() {
        if (textField.isPainted) {
          return textField.shadowRoot
            .querySelector("label")
            .getAttribute("for");
        }

        return target.for;
      },

      set for(value) {
        if (textField.isPainted) {
          textField.shadowRoot
            .querySelector("label")
            .setAttribute("for", value);
          return;
        }

        target.for = value;
      },
    };
  },
};

export default label;
