import { $, $$ } from "./bling";

const nightMode = $(".nightMode");
console.log(nightMode);

nightMode.on("click", function() {
  document.body.classList.toggle("nightmode");
});
