import { $, $$ } from "../bling";

const puOuter = $(".puOuterContainer");
const puInner = $(".puInnerContainer");
const plusButton = $(".plusButton");
const plusButton1 = $(".plusButton1");

const bhOuter = $(".bhOuterContainer");
const bhInner = $(".bhInnerContainer");
const buyHardback = $(".buyHardback");

const eOuter = $(".eOuterContainer");
const eInner = $(".eInnerContainer");
const emailMe = $(".emailMe");

const dOuter = $(".dOuterContainer");
const dInner = $(".dInnerContainer");
const donate = $(".donate");

var bhOpenVar = false;
var dOpenVar = false;
var eOpenVar = false;

// plus Button Click
plusButton.on("click", puOpen);
plusButton1.on("click", puOpen);
window.on("click", closepuOnClick);
document.on("keydown", closepuOnEsc);

function puOpen() {
  puOuter.style.display = "flex";
  setTimeout(() => (puInner.style.opacity = "1"), 50);
  document.body.classList.add("noScroll");
}

function closepuOnClick(e) {
  if (
    e.target == puOuter &&
    bhOpenVar === false &&
    eOpenVar === false &&
    dOpenVar === false
  ) {
    puInner.style.opacity = "0";
    document.body.classList.remove("noScroll");
    setTimeout(() => (puOuter.style.display = "none"), 100);
  }
}

function closepuOnEsc(e) {
  if (
    e.keyCode == 27 &&
    bhOpenVar === false &&
    eOpenVar === false &&
    dOpenVar === false
  ) {
    puInner.style.opacity = "0";
    document.body.classList.remove("noScroll");
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
    setTimeout(() => (bhOuter.style.display = "none"), 800);
    bhOpenVar = false;
  }
}

function closebhOnEsc(e) {
  if (e.keyCode == 27 && bhOpenVar === true) {
    bhInner.style.opacity = "0";
    setTimeout(() => (bhOuter.style.display = "none"), 800);
    bhOpenVar = false;
  }
}

// Donate
donate.on("click", dOpen);
window.on("click", closedOnClick);
document.on("keydown", closedOnEsc);

function dOpen() {
  dOuter.style.display = "flex";
  dOpenVar = true;
  setTimeout(() => (dInner.style.opacity = "1"), 50);
}

function closedOnClick(e) {
  if (e.target == dOuter && dOpenVar === true) {
    dInner.style.opacity = "0";
    setTimeout(() => (dOuter.style.display = "none"), 800);
    dOpenVar = false;
  }
}

function closedOnEsc(e) {
  if (e.keyCode == 27 && dOpenVar === true) {
    dInner.style.opacity = "0";
    setTimeout(() => (dOuter.style.display = "none"), 800);
    dOpenVar = false;
  }
}

// Email Me Click
emailMe.on("click", eOpen);
window.on("click", closeEOnClick);
document.on("keydown", closeEOnEsc);

function eOpen() {
  eOuter.style.display = "flex";
  puInner.style.opacity = "0";
  eOpenVar = true;
  setTimeout(() => (eInner.style.opacity = "1"), 50);
  setTimeout(() => (puInner.style.display = "none"), 800);
}

function closeEOnClick(e) {
  if (e.target == eOuter && eOpenVar === true) {
    eInner.style.opacity = "0";
    puInner.style.display = "flex";
    setTimeout(() => (eOuter.style.display = "none"), 800);
    setTimeout(() => (puInner.style.opacity = "1"), 50);
    eOpenVar = false;
  }
}

function closeEOnEsc(e) {
  if (e.keyCode == 27 && eOpenVar === true) {
    eInner.style.opacity = "0";
    puInner.style.display = "flex";
    setTimeout(() => (eOuter.style.display = "none"), 800);
    setTimeout(() => (puInner.style.opacity = "1"), 50);
    eOpenVar = false;
  }
}
