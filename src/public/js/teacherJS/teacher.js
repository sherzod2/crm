const elModal = document.querySelector(".modal");
const elOverlay = document.querySelector(".overlay");
const elOpenModalBtn = document.querySelector(".add-task-btn");
const elCloseModalBtn = document.querySelector(".modal__close");

elOpenModalBtn.addEventListener("click", () => {
  elModal.classList.remove("hidden");
  elOverlay.classList.remove("hidden");
});

elCloseModalBtn.addEventListener("click", () => {
  elModal.classList.add("hidden");
  elOverlay.classList.add("hidden");
});

elOverlay.addEventListener("click", () => {
  elModal.classList.add("hidden");
  elOverlay.classList.add("hidden");
});

document.addEventListener("keydown", (e) => {
  if (e.code == "Escape") {
    elModal.classList.add("hidden");
    elOverlay.classList.add("hidden");
  }
});
