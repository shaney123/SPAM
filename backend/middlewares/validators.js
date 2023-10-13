const adminValidator = async (req, res, next) => {
  if (req.user.userType === "admin") {
    next();
  } else {
    res
      .status(403)
      .setHeader("Content-Type", "application/json")
      .json({ success: false, msg: "Unauthorized to access this resource!" });
  }
};

module.exports = {
  adminValidator,
};
