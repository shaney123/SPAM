const express = require("express");
const router = express.Router();

const reqReceived = require("../middlewares/reqReceived");
const { createAttendance } = require("../controllers/attendanceController");

router.route("/").post(reqReceived, createAttendance);

router.route("/:studentId").post(reqReceived, createAttendance);

module.exports = router;
