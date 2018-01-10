const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("page1");
});

router.get("/page2", (req, res) => {
  res.render("page2");
});

router.get("/page3", (req, res) => {
  res.render("page3");
});

router.get("/page4", (req, res) => {
  res.render("page4");
});

router.get("/page5", (req, res) => {
  res.render("page5");
});

router.get("/page6", (req, res) => {
  res.render("page6");
});

router.get("/page7", (req, res) => {
  res.render("page7");
});

router.get("/page8", (req, res) => {
  res.render("page8");
});

router.get("/page9", (req, res) => {
  res.render("page9");
});

router.get("/page10", (req, res) => {
  res.render("page10");
});

module.exports = router;
