const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", (req, res) => {
  res.render("page1");
});

router.post("/charge", mainController.charge);
router.post("/donation", mainController.donation);

module.exports = router;
