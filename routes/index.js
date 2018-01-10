const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("page1");
});

router.get("/page2", (req, res) => {
  res.render("page2");
});

module.exports = router;
