import "./sass/styles.sass";
import { $, $$ } from "./modules/bling";

// p1
import typedWrapperFunction from "./modules/page1/typed";
import { skipWrapperFunction, skipHighlights } from "./modules/page1/skip";

// p2
import returnskipWrapperFunction from "./modules/returnSkip";

if ($("body").classList.contains("page1")) {
  typedWrapperFunction();
  skipWrapperFunction();
}

// solves skipReturn Problem

if ($("body").classList.contains("page2")) {
  returnskipWrapperFunction();
}

window.addEventListener("load", function() {
  var reloading = sessionStorage.getItem("reloading");
  if ($("body").classList.contains("page1") && reloading) {
    sessionStorage.removeItem("reloading");
    skipHighlights();
  }
});
