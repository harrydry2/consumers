const keys = require("../../../../config/keys");
const stripe = Stripe(keys.STRIPE_P);
var elements = stripe.elements({
  fonts: [
    {
      family: "PerpetuaStdR",
      src: `url(https://hd999.herokuapp.com/fonts/PerpetuaStdR.woff2) format("woff")`
    }
  ]
});

var elementStyles = {
  base: {
    color: "#333333",
    fontFamily: "PerpetuaStdR",
    fontSmoothing: "antialiased",
    fontSize: "15px",
    ":focus": {
      color: "#333333"
    },
    "::placeholder": {
      color: "#333333"
    },
    ":focus::placeholder": {
      color: "#333333"
    }
  },
  invalid: {
    color: "red",
    ":focus": {
      color: "red"
    },
    "::placeholder": {
      color: "red"
    }
  }
};

var elementClasses = {
  focus: "focus",
  empty: "empty",
  invalid: "invalid"
};

var cardNumber = elements.create("cardNumber", {
  style: elementStyles,
  classes: elementClasses
});
cardNumber.mount("#cardNumber");

var cardExpiry = elements.create("cardExpiry", {
  style: elementStyles,
  classes: elementClasses
});
cardExpiry.mount("#cardExpiry");

var cardCvc = elements.create("cardCvc", {
  style: elementStyles,
  classes: elementClasses
});
cardCvc.mount("#cardCvc");

const cardNumberAlt = document.querySelector(".cardNumberAlt");
const cardExpiryAlt = document.querySelector(".cardExpiryAlt");

cardNumber.on("focus", function() {
  cardNumberAlt.classList.remove("opacityDown");
});

cardNumber.on("blur", function() {
  if (cardNumberAlt.classList.contains("empty")) {
    cardNumberAlt.classList.add("opacityDown");
  }
});

cardExpiry.on("focus", function() {
  cardExpiryAlt.classList.remove("opacityDown");
});

cardExpiry.on("blur", function() {
  if (cardExpiryAlt.classList.contains("empty")) {
    cardExpiryAlt.classList.add("opacityDown");
  }
});

// Handle form submission
const form = document.getElementById("payment-form");
console.log(form, "form");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  stripe.createToken(cardNumber).then(function(result) {
    if (result.error) {
      console.log(result.error.message);
    } else {
      stripeTokenHandler(result.token);
    }
  });
});

const stripeTokenHandler = token => {
  // Insert the token ID into the form so it gets submitted to the server
  const form = document.getElementById("payment-form");
  const hiddenInput = document.createElement("input");
  hiddenInput.setAttribute("type", "hidden");
  hiddenInput.setAttribute("name", "stripeToken");
  hiddenInput.setAttribute("value", token.id);
  form.appendChild(hiddenInput);
  // Submit the form
  form.submit();
};
