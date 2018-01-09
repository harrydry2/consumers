import { $, $$ } from "./bling";

const skip = $(".hcSkipActive");
const wraphighlights = $(".wraphighlights");
const ptContainer = $(".ptContainer");
const typedStringsContainer = $(".typedStringsContainer");
const typedStringsContainerSkip = $(".typedStringsContainerSkip");
skip.on("click", skipHighlights);

function skipHighlights() {
  // wraphighlights.style.display = "none";
  typedStringsContainer.style.display = "none";
  typedStringsContainerSkip.style.display = "block";
  typedStringsContainerSkip.classList.add("tscsActive");
  wraphighlights.classList.add("whActive");
  ptContainer.classList.add("ptActive");
}
