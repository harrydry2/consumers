import { $, $$ } from "../bling";

const skip = $(".hcSkipActive");
const wraphighlightsPage1 = $(".wraphighlightsPage1");
const p1ptContainer = $(".p1ptContainer");
const typedStringsContainer = $(".typedStringsContainer");
const typedStringsContainerSkip = $(".typedStringsContainerSkip");

function skipHighlights() {
  // stop/start click on skip/body>
  skip.style.pointerEvents = "none";
  p1ptContainer.classList.remove("disableClick");
  wraphighlightsPage1.classList.remove("disableClick");
  // remove typedStrings
  typedStringsContainer.style.display = "none";
  // add Stuff
  typedStringsContainerSkip.style.display = "block";
  typedStringsContainerSkip.classList.add("tscsActive");
  wraphighlightsPage1.classList.add("whActive");
  p1ptContainer.classList.add("ptActive");
}

export default function skipWrapperFunction() {
  skip.on("click", skipHighlights);
}

module.exports = {
  skipWrapperFunction,
  skipHighlights
};
