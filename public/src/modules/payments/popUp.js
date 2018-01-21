import { $, $$ } from "../bling";

const puOuter = $(".puOuterContainer");
const puInner = $(".puInnerContainer");
const plusButton = $(".plusButton");

const bhOuter = $(".bhOuterContainer");
const bhInner = $(".bhInnerContainer");
const buyHardback = $(".buyHardback");

var bhOpenVar = false;

// plus Button Click
plusButton.on("click", puOpen);
window.on("click", closepuOnClick);
document.on("keydown", closepuOnEsc);

function puOpen() {
  puOuter.style.display = "flex";
  setTimeout(() => (puInner.style.opacity = "1"), 50);
  document.body.classList.add("noScroll");
}

function closepuOnClick(e) {
  if (e.target == puOuter && bhOpenVar === false) {
    puInner.style.opacity = "0";
    document.body.classList.remove("noScroll");
    setTimeout(() => (puOuter.style.display = "none"), 100);
  }
}

function closepuOnEsc(e) {
  if (e.keyCode == 27 && bhOpenVar === false) {
    puInner.style.opacity = "0";
    document.body.classList.remove("modalNoScroll");
    setTimeout(() => (puOuter.style.display = "none"), 100);
  }
}

// buyHardback Click

buyHardback.on("click", bhOpen);
window.on("click", closebhOnClick);
document.on("keydown", closebhOnEsc);

function bhOpen() {
  bhOuter.style.display = "flex";
  bhOpenVar = true;
  setTimeout(() => (bhInner.style.opacity = "1"), 50);
}

function closebhOnClick(e) {
  if (e.target == bhOuter && bhOpenVar === true) {
    bhInner.style.opacity = "0";
    setTimeout(() => (bhOuter.style.display = "none"), 100);
    bhOpenVar = false;
  }
}

function closebhOnEsc(e) {
  if (e.keyCode == 27 && bhOpenVar === true) {
    bhInner.style.opacity = "0";
    setTimeout(() => (bhOuter.style.display = "none"), 100);
    bhOpenVar = false;
  }
}
