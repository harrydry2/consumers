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

var cardNumberD = elements.create("cardNumber", {
  style: elementStyles,
  classes: elementClasses
});
cardNumberD.mount("#cardNumberD");

var cardExpiryD = elements.create("cardExpiry", {
  style: elementStyles,
  classes: elementClasses
});
cardExpiryD.mount("#cardExpiryD");

var cardCvcD = elements.create("cardCvc", {
  style: elementStyles,
  classes: elementClasses
});
cardCvcD.mount("#cardCvcD");

const cardNumberAltD = document.querySelector(".cardNumberAltD");
const cardExpiryAltD = document.querySelector(".cardExpiryAltD");

cardNumberD.on("focus", function() {
  cardNumberAltD.classList.remove("opacityDown");
});

cardNumberD.on("blur", function() {
  if (cardNumberAltD.classList.contains("empty")) {
    cardNumberAltD.classList.add("opacityDown");
  }
});

cardExpiryD.on("focus", function() {
  cardExpiryAltD.classList.remove("opacityDown");
});

cardExpiryD.on("blur", function() {
  if (cardExpiryAltD.classList.contains("empty")) {
    cardExpiryAltD.classList.add("opacityDown");
  }
});

// Handle form submission
const formD = document.getElementById("payment-formD");
console.log(formD, "form");
formD.addEventListener("submit", function(event) {
  event.preventDefault();

  stripe.createToken(cardNumberD).then(function(result) {
    if (result.error) {
      console.log(result.error.message);
    } else {
      stripeTokenHandler(result.token);
    }
  });
});

const stripeTokenHandler = token => {
  // Insert the token ID into the form so it gets submitted to the server
  const formD = document.getElementById("payment-formD");
  const hiddenInput = document.createElement("input");
  hiddenInput.setAttribute("type", "hidden");
  hiddenInput.setAttribute("name", "stripeToken");
  hiddenInput.setAttribute("value", token.id);
  formD.appendChild(hiddenInput);
  // Submit the form
  formD.submit();
};
