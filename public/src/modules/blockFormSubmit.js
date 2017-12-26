import { $, $$ } from "./bling";

const formInputs = $$(".formInput");

formInputs.forEach(input => {
  input.on("keypress", function(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  });
});
