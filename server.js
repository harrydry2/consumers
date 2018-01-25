const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressStaticGzip = require("express-static-gzip");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
var session = require("express-session");
const helpers = require("./helpers");
const routes = require("./routes/index");
const keys = require("./config/keys");
const app = express();

app.locals.format = require("date-fns/format");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

app.use(cookieParser());
app.use(
  session({
    secret: "dasdadada",
    resave: true,
    saveUninitialized: true
  })
);
app.use(flash());

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.locals.flashes = req.flash();
  res.locals.h = helpers;
  next();
});

app.use("/", routes);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log("listening"));
