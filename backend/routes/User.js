const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/userController");
const reqReceived = require("../middlewares/reqReceived");

router.route("/").post(reqReceived, createUser).get(reqReceived);

module.exports = router;
