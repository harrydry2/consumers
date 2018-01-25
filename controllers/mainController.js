const keys = require("../config/keys");
const stripe = require("stripe")(keys.STRIPE_S);

exports.charge = async (req, res) => {
  const {
    stripeToken,
    stripePostcode,
    stripeCity,
    stripeAddress,
    stripeEmail,
    stripeName
  } = req.body;
  const charge = await stripe.charges.create({
    amount: 1000,
    currency: "GBP",
    description: "Consumers — By Harry Dry",
    source: stripeToken,
    metadata: {
      stripeName,
      stripeEmail,
      stripeAddress,
      stripeCity,
      stripePostcode
    }
  });
  req.flash("hardback", "Successful Purchase");
  res.redirect("/");
};

exports.donation = async (req, res) => {
  const { stripeToken, stripeEmail, stripeName, stripeDonation } = req.body;
  const charge = await stripe.charges.create({
    amount: stripeDonation,
    currency: "GBP",
    description: "Consumers — By Harry Dry",
    source: stripeToken,
    metadata: {
      stripeName,
      stripeEmail
    }
  });
  req.flash("donation", "Successful Donation");
  res.redirect("/");
};
