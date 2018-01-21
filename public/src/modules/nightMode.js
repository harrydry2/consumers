import { $, $$ } from "./bling";

const nightMode = $(".nightModeOn");

nightMode.on("click", function() {
  document.body.classList.toggle("nightmode");
});
