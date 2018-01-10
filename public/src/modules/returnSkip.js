import { $, $$ } from "./bling";

export default function returnskipWrapperFunction() {
  const returnSkip = $(".ptbReturnSkip");
  returnSkip.on("click", function() {
    sessionStorage.setItem("reloading", "true");
  });
}
