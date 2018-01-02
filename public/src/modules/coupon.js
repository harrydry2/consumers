import { $, $$ } from "./bling";

const refresh = $(".refreshIcon");
const couponInput = $(".couponInput");
const chargesContainerHidden = $(".chargesContainerHidden");
const heavyCharge = $(".heavyCharge");
const plan = $(".plan");
const couponFM = $(".couponFM");

refresh.on("click", function(e) {
  if (
    couponInput.value === "KIDSLEEPY1" ||
    couponInput.value === "TEDADDIC2" ||
    couponInput.value === "SUAVEYOUNGIN3" ||
    couponInput.value === "CAUTIOUSKIERAN4" ||
    couponInput.value === "AQUIFER5" ||
    couponInput.value === "PROFECY6" ||
    couponInput.value === "LIPSTICISM7" ||
    couponInput.value === "LANKSTON8" ||
    couponInput.value === "CHRISTIANMCDEPRESSION9" ||
    couponInput.value === "THEFORUM10" ||
    couponInput.value === "JOHNIEPEE11" ||
    couponInput.value === "ELEMENTALS12" ||
    couponInput.value === "JAYDEN13" ||
    couponInput.value === "REAMS14" ||
    couponInput.value === "RHYMEGURU15" ||
    couponInput.value === "TURQUOISEPRINCE16" ||
    couponInput.value === "NIKOROSE17" ||
    couponInput.value === "PEDWOE18" ||
    couponInput.value === "ANDREALETYBURNS19" ||
    couponInput.value === "WILDYEAR20" ||
    couponInput.value === "IOANADOBROIU21" ||
    couponInput.value === "KOGZ22" ||
    couponInput.value === "SPENELO23" ||
    couponInput.value === "BFAST24" ||
    couponInput.value === "KALEOKOHLSON25" ||
    couponInput.value === "KAYE26" ||
    couponInput.value === "IKASMILLIS27" ||
    couponInput.value === "NERVE28" ||
    couponInput.value === "YUNGMILO29" ||
    couponInput.value === "YUNGHOMAY30" ||
    couponInput.value === "YUNGGORYO31"
  ) {
    chargesContainerHidden.style.display = "flex";
    setTimeout(() => {
      couponFM.innerHTML = `Success!`;
      couponFM.style.color = `#3ECF8E`;
      chargesContainerHidden.style.height = "4rem";
      chargesContainerHidden.style.opacity = "1";
      heavyCharge.innerHTML = `$10.50`;
      plan.innerHTML = `$10.50`;
    }, 100);
  } else {
    couponFM.innerHTML = `Invalid Coupon Code!`;
    couponFM.style.color = `red`;
  }
});
