const input = {
  from(textField) {
    return new Proxy(
      {},
      {
        get(target, key) {
          if (textField.isPainted) {
            if (key === "value") {
              return textField.shadowRoot.querySelector("input").value;
            }

            return textField.shadowRoot
              .querySelector("input")
              .getAttribute(key);
          }

          return target[key];
        },

        set(target, key, value) {
          if (textField.isPainted) {
            if (key === "value") {
              textField.shadowRoot.querySelector("input").value = value;
              return this;
            }

            value
              ? textField.shadowRoot
                  .querySelector("input")
                  .setAttribute(key, value)
              : textField.shadowRoot
                  .querySelector("input")
                  .removeAttribute(key);

            return this;
          }

          target[key] = value;
          return true;
        },
      },
    );
  },
};

export default input;
