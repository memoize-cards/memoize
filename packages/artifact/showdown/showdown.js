import showdown from "showdown";
import highlight from "showdown-highlight";

const converter = new showdown.Converter({
  extensions: [
    highlight({
      pre: true,
    }),
  ],
});

export default converter;
