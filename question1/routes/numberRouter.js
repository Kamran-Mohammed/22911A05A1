const express = require("express");
const numberController = require("../controllers/numberController");

const router = express.Router();

router.use("/:id", numberController.calculate);

module.exports = router;
