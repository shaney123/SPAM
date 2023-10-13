const express = require("express");
const router = express.Router();
const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  login,
  logout,
} = require("../controllers/userController");

const { adminValidator } = require("../middlewares/validators");
const reqReceived = require("../middlewares/reqReceived");
const protectedRoute = require("../middlewares/auth");

router
  .route("/")
  .post(reqReceived, createUser)
  .get(reqReceived, protectedRoute, adminValidator, getUsers);

router.route("/login").post(reqReceived, login);

router.route("/logout").get(reqReceived, protectedRoute, logout);

router
  .route("/:userId")
  .get(reqReceived, protectedRoute, getUser)
  .patch(reqReceived, protectedRoute, updateUser);

module.exports = router;
