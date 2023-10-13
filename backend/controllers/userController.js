const User = require("../models/User");

const createUser = async (req, res, next) => {
  try {
    const {
      email,
      password,
      username,
      firstName,
      middleName,
      lastName,
      phoneNumber,
      gender,
      birthday,
      userType,
      address,
      img,
    } = req.body;

    //   const verification = {
    //     code: Math.random().toString(36).slice(-5),
    //     timeGenerated: new Date(),
    //     expiresIn: 30,
    //   };

    const user = await User.create({
      email,
      password,
      username,
      firstName,
      middleName,
      lastName,
      phoneNumber,
      gender,
      birthday,
      userType,
      address,
      img: img || `../public/images/profiles/goku.jpeg`,
    });

    sendTokenResponse(user, 201, res);
  } catch (err) {
    console.error(err);
  }
};

const sendTokenResponse = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({ success: true, token, authority: user.userType });
};

module.exports = {
  createUser,
};
