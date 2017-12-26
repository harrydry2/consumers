const mongoose = require("mongoose");
// const Email = mongoose.model("Email");
var nodemailer = require("nodemailer");
const stripe = require("stripe")("sk_live_cjmhsVYIvbXn6ybJokgQGwyk");
const helpers = require("../helpers");

module.exports = app => {
  app.post("/charge", async (req, res) => {
    if (req.body.stripeCoupon === "kidsleepy") {
      var customerCoupon = "60off";
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
                  plan: "11Plan"
                }
              ],
              coupon: customer.metadata.coupon
            },
            async function(err, subscription) {
              var brand = customer.sources.data[0].brand;
              var last4 = customer.sources.data[0].last4;
              var name = customer.description.replace(" ", "");
              if (subscription.discount) {
                const percentOff =
                  subscription.discount.coupon.percent_off * (1 / 100);
                const chargeNoDot = (
                  subscription.items.data[0].plan.amount -
                  percentOff * subscription.items.data[0].plan.amount
                ).toString();
                const dollar = helpers.numberToDollar(chargeNoDot);
                res.render("paymentSuccess", {
                  brand,
                  last4,
                  name,
                  dollar
                });
              } else {
                const chargeNoDot = await subscription.items.data[0].plan.amount.toString();
                const dollar = await helpers.numberToDollar(chargeNoDot);
                res.render("paymentSuccess", {
                  brand,
                  last4,
                  name,
                  dollar
                });
              }
            }
          );
        }
      }
    );
  });
};
