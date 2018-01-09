const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressStaticGzip = require("express-static-gzip");
const helpers = require("./helpers");

// mongoose.Promise = global.Promise;
// mongoose.connect(
//   "mongodb://harrydry:DavidLuiz4@ds159676.mlab.com:59676/kidsleepy"
// );
// require("./models/Email.js");

const app = express();

app.locals.format = require("date-fns/format");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.locals.h = helpers;
  next();
});

require("./routes/chargeRoute")(app);

app.get(
  "/.well-known/acme-challenge/egWBM-tu6w-jKzqqC73sYp2d6bdmF3f_VcClU_N0PVk",
  (req, res) => {
    res.send(
      "egWBM-tu6w-jKzqqC73sYp2d6bdmF3f_VcClU_N0PVk.ySvRCyz5X1vWf6gd6f64mxvZ3OzaXyluhZRwpDEy03M"
    );
  }
);

http: app.get("/", (req, res) => {
  res.render("page1");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("listening"));
