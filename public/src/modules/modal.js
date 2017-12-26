import { $, $$ } from "./bling";

const modalOuter = $(".modalOuterContainer");
const modalInner = $(".modalInnerContainer");
const pcButton = $(".pcButton");

pcButton.on("click", modalOpen);
window.on("click", closeModalOnClick);
document.on("keydown", closeModalOnEsc);

function modalOpen() {
  modalOuter.style.display = "block";
  setTimeout(() => (modalInner.style.opacity = "1"), 50);
  document.body.classList.add("modalNoScroll");
}

function closeModalOnClick(e) {
  if (e.target == modalOuter) {
    modalInner.style.opacity = "0";
    document.body.classList.remove("modalNoScroll");
    setTimeout(() => (modalOuter.style.display = "none"), 100);
  }
}

function closeModalOnEsc(e) {
  if (e.keyCode == 27) {
    modalInner.style.opacity = "0";
    document.body.classList.remove("modalNoScroll");
    setTimeout(() => (modalOuter.style.display = "none"), 100);
  }
}
