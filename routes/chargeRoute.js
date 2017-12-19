const mongoose = require("mongoose");
// const Email = mongoose.model("Email");
var nodemailer = require("nodemailer");
const stripe = require("stripe")("sk_test_ZiLvy2TwdYQdGkWqmiUzbWbZ");

module.exports = app => {
  app.post("/charge", async (req, res) => {
    if (req.body.stripeCoupon === "melonhead") {
      var customerCoupon = "2PoundsOff";
    } else {
      var customerCoupon = "";
    }
    stripe.customers.create(
      {
        email: req.body.stripeEmail,
        source: req.body.stripeToken,
        description: req.body.stripeName,
        metadata: {
          coupon: customerCoupon
        }
      },
      function(err, customer) {
        if (err) {
          res.send({
            success: false,
            message: "Error"
          });
        } else {
          stripe.subscriptions.create(
            {
              customer: customer.id,
              items: [
                {
                  plan: "basicMonthly"
                }
              ],
              coupon: customer.metadata.coupon
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
