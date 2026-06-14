const workspace = document.querySelector(".workspace");
const framesRoot = document.querySelector("#frames");
const template = document.querySelector("#frame-template");
const activeLayout = document.querySelector("#active-layout");
const tierButtons = Array.from(document.querySelectorAll(".tier"));

function renderFrames(count) {
  workspace.dataset.frameCount = String(count);
  activeLayout.textContent = `${count} рамки`;
  framesRoot.replaceChildren();

  for (let index = 1; index <= count; index += 1) {
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector("h2").textContent = `ChatGPT ${index}`;

    const state = node.querySelector(".frame-state");
    node.querySelector(".mark-response").addEventListener("click", () => {
      node.classList.add("has-response");
      state.textContent = "Ответ";
    });
    node.querySelector(".clear-response").addEventListener("click", () => {
      node.classList.remove("has-response");
      state.textContent = "Ожидание";
    });

    framesRoot.append(node);
  }
}

tierButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const count = Number(button.dataset.frames);

    tierButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    renderFrames(count);
  });
});

renderFrames(2);
