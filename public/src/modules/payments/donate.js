import { $, $$ } from "../bling";

const stripeDonationAmount = $(".stripeDonationAmount");
const middleMoney = $(".middleMoney");
const moneyUp = $(".moneyUp");
const moneyDown = $(".moneyDown");

var donationAmount = 500;
var donationLevel = 1;

function updateAmount() {
  if (donationLevel <= 0) {
    donationAmount = 200;
    middleMoney.innerText = `£2.00`;
    moneyDown.style.opacity = "0.5";
  } else if (donationLevel === 1) {
    donationAmount = 500;
    middleMoney.innerText = `£5.00`;
    moneyDown.style.opacity = "1";
  } else if (donationLevel === 2) {
    donationAmount = 1000;
    middleMoney.innerText = `£10.00`;
    moneyUp.style.opacity = "1";
  } else if (donationLevel >= 3) {
    donationAmount = 1500;
    middleMoney.innerText = `£15.00`;
    moneyUp.style.opacity = "0.5";
  }
  stripeDonationAmount.value = `${donationAmount}`;
}

moneyUp.on("click", function(e) {
  if (donationLevel < 3) {
    donationLevel++;
    updateAmount();
  }
});

moneyDown.on("click", function(e) {
  if (donationLevel > 0) {
    donationLevel--;
    updateAmount();
  }
});

updateAmount();
