import { $, $$ } from "./bling";

const modalOuter = $(".mOuterContainer");
const m1Inner = $(".m1InnerContainer");
const buyNow = $(".buyNow");

buyNow.on("click", modalOpen);
window.on("click", closeModalOnClick);
document.on("keydown", closeModalOnEsc);

function modalOpen() {
  modalOuter.style.display = "flex";
  setTimeout(() => (m1Inner.style.opacity = "1"), 50);
  document.body.classList.add("modalNoScroll");
}

function closeModalOnClick(e) {
  if (e.target == modalOuter) {
    m1Inner.style.opacity = "0";
    document.body.classList.remove("modalNoScroll");
    setTimeout(() => (modalOuter.style.display = "none"), 100);
  }
}

function closeModalOnEsc(e) {
  if (e.keyCode == 27) {
    m1Inner.style.opacity = "0";
    document.body.classList.remove("modalNoScroll");
    setTimeout(() => (modalOuter.style.display = "none"), 100);
  }
}
