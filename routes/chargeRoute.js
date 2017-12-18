const mongoose = require("mongoose");
// const Email = mongoose.model("Email");
var nodemailer = require("nodemailer");
const stripe = require("stripe")("sk_test_ZiLvy2TwdYQdGkWqmiUzbWbZ");

module.exports = app => {
  app.post("/charge", async (req, res) => {
    stripe.customers.create(
      {
        email: req.body.stripeEmail,
        source: req.body.stripeToken
      },
      function(err, customer) {
        if (err) {
          res.send({
            success: false,
            message: "Error"
          });
        } else {
          const { id } = customer;
          stripe.subscriptions.create(
            {
              customer: id,
              items: [
                {
                  plan: "basicMonthly"
                }
              ]
            },
            function(err, subscription) {
              console.log(err);
              console.log(subscription);
            }
          );
        }
      }
    );
    res.redirect("/");
  });
};
