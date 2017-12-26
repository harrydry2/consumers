import { $, $$ } from "./bling";

const refresh = $(".refreshIcon");
const couponInput = $(".couponInput");
const chargesContainerHidden = $(".chargesContainerHidden");
const heavyCharge = $(".heavyCharge");
const plan = $(".plan");
const couponFM = $(".couponFM");

refresh.on("click", function(e) {
  if (couponInput.value === "kidsleepy") {
    chargesContainerHidden.style.display = "flex";
    setTimeout(() => {
      couponFM.innerHTML = `Success!`;
      couponFM.style.color = `#3ECF8E`;
      chargesContainerHidden.style.height = "4rem";
      chargesContainerHidden.style.opacity = "1";
      heavyCharge.innerHTML = `$4.40`;
      plan.innerHTML = `$4.40`;
    }, 100);
  } else {
    couponFM.innerHTML = `Invalid Coupon Code!`;
    couponFM.style.color = `red`;
  }
});
