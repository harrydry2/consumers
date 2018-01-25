import { $, $$ } from "../bling";
import skipHighlights from "../page1/skip";

const returnSkip1 = $(".buyButton");
const returnSkip2 = $(".donateButton");
const puOuterContainerFlash = $(".puOuterContainerFlash");
const puInnerContainerFlash = $(".puInnerContainerFlash");
var skipOpenVar = false;

returnSkip1.on("click", function() {
  sessionStorage.setItem("skip", "yes");
});

returnSkip2.on("click", function() {
  sessionStorage.setItem("skip", "yes");
});

window.addEventListener("load", async function() {
  var skip = sessionStorage.getItem("skip");
  if (skip && skipOpenVar === false) {
    sessionStorage.removeItem("skip");
    document.body.classList.add("noScroll");
    skipOpenVar = true;
    await skipHighlights();
    if (puOuterContainerFlash) {
      puOuterContainerFlash.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
  }
});

window.on("click", closeFlashOnClick);
document.on("keydown", closeFlashOnEsc);

function closeFlashOnClick(e) {
  if (e.target == puOuterContainerFlash && skipOpenVar === true) {
    puInnerContainerFlash.style.opacity = "0";
    setTimeout(() => (puOuterContainerFlash.style.display = "none"), 100);
    document.body.classList.remove("noScroll");
    skipOpenVar = false;
  }
}

function closeFlashOnEsc(e) {
  if (e.keyCode == 27 && skipOpenVar === true) {
    puInnerContainerFlash.style.opacity = "0";
    setTimeout(() => (puOuterContainerFlash.style.display = "none"), 100);
    document.body.classList.remove("noScroll");
    skipOpenVar = false;
  }
}
