const stripe = Stripe("pk_live_SYAmCo2SAlL03XizufhUazZk");
const elements = stripe.elements();

const style = {
  base: {
    color: "#36434D",
    lineHeight: "18px",
    fontFamily: "CamphorStd-Regular",
    fontSmoothing: "antialiased",
    fontSize: "12px",
    "::placeholder": {
      color: "#A09EA2"
    }
  },
  invalid: {
    color: "#fa755a",
    iconColor: "#fa755a"
  }
};

const card = elements.create("card", {
  style: style,
  hidePostalCode: true
});
card.mount("#card-element");
console.log(card, "card");

// Handle real-time validation errors from the card Element.
card.addEventListener("change", function(event) {
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