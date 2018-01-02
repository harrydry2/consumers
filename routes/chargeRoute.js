const mongoose = require("mongoose");
// const Email = mongoose.model("Email");
var nodemailer = require("nodemailer");
const stripe = require("stripe")("sk_live_cjmhsVYIvbXn6ybJokgQGwyk");
const helpers = require("../helpers");

module.exports = app => {
  app.post("/charge", async (req, res) => {
    if (
      req.body.stripeCoupon === "KIDSLEEPY1" ||
      req.body.stripeCoupon === "TEDADDIC2" ||
      req.body.stripeCoupon === "SUAVEYOUNGIN3" ||
      req.body.stripeCoupon === "CAUTIOUSKIERAN4" ||
      req.body.stripeCoupon === "AQUIFER5" ||
      req.body.stripeCoupon === "PROFECY6" ||
      req.body.stripeCoupon === "LIPSTICISM7" ||
      req.body.stripeCoupon === "LANKSTON8" ||
      req.body.stripeCoupon === "CHRISTIANMCDEPRESSION9" ||
      req.body.stripeCoupon === "THEFORUM10" ||
      req.body.stripeCoupon === "JOHNIEPEE11" ||
      req.body.stripeCoupon === "ELEMENTALS12" ||
      req.body.stripeCoupon === "JAYDEN13" ||
      req.body.stripeCoupon === "REAMS14" ||
      req.body.stripeCoupon === "RHYMEGURU15" ||
      req.body.stripeCoupon === "TURQUOISEPRINCE16" ||
      req.body.stripeCoupon === "NIKOROSE17" ||
      req.body.stripeCoupon === "PEDWOE18" ||
      req.body.stripeCoupon === "ANDREALETYBURNS19" ||
      req.body.stripeCoupon === "WILDYEAR20" ||
      req.body.stripeCoupon === "IOANADOBROIU21" ||
      req.body.stripeCoupon === "KOGZ22" ||
      req.body.stripeCoupon === "SPENELO23" ||
      req.body.stripeCoupon === "BFAST24" ||
      req.body.stripeCoupon === "KALEOKOHLSON25" ||
      req.body.stripeCoupon === "KAYE26" ||
      req.body.stripeCoupon === "IKASMILLIS27" ||
      req.body.stripeCoupon === "NERVE28" ||
      req.body.stripeCoupon === "YUNGMILO29" ||
      req.body.stripeCoupon === "YUNGHOMAY30" ||
      req.body.stripeCoupon === "YUNGGORYO31"
    ) {
      var customerCoupon = "25off";
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
                  plan: "14Plan"
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
