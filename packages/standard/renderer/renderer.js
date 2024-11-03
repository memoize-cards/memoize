const app = document.querySelector("app");

function renderer(content) {
  app.innerHTML = content;
}

export default renderer;
