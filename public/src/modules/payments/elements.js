const stripe = Stripe("pk_live_SYAmCo2SAlL03XizufhUazZk");
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
      color: "#424770"
    },
    "::placeholder": {
      color: "#333333"
    },
    ":focus::placeholder": {
      color: "#CFD7DF"
    }
  },
  invalid: {
    color: "#fff",
    ":focus": {
      color: "#FA755A"
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

// Handle real-time validation errors from the card Element.
cardNumber.addEventListener("change", function(event) {
  const displayError = document.getElementById("card-errors");
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = "";
  }
});

// Handle form submission
const form = document.getElementById("payment-form");
console.log(form, "form");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  stripe.createToken(card).then(function(result) {
    if (result.error) {
      // Inform the user if there was an error
      const errorElement = document.getElementById("card-errors");
      errorElement.textContent = result.error.message;
    } else {
      // Send the token to your server
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
