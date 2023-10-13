const User = require("../models/User");

const createUser = async (req, res, next) => {
  try {
    console.log(req.body);
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
      middleName: middleName || null,
      lastName,
      phoneNumber: phoneNumber || null,
      gender,
      birthday: birthday || null,
      userType: userType || "student",
      address,
      img: img || `../public/images/profiles/goku.jpeg`,
    });

    sendTokenResponse(user, 201, res);
  } catch (err) {
    console.error(err);
  }
};

const getUsers = async (req, res, next) => {
  const filter = {};
  const options = {
    sort: {
      createdAt: -1,
    },
  };
  const { page, limit } = req.query;
  const skip = (page - 1) * limit;
  if (Object.keys(req.query).length) {
    // query parameter
    const {
      email,
      username,
      firstName,
      middleName,
      lastName,
      phoneNumber,
      gender,
      birthday,
      address,
    } = req.query;

    if (email) filter.email = true;
    if (username) filter.username = true;
    if (firstName) filter.firstName = true;
    if (middleName) filter.middleName = true;
    if (lastName) filter.lastName = true;
    if (phoneNumber) filter.phoneNumber = true;
    if (gender) filter.gender = true;
    if (birthday) filter.birthday = true;
    if (jobLevel) filter.jobLevel = true;
    if (address) filter.address = true;

    if (limit) options.limit = limit;
    options.sort = {
      createdAt: -1,
    };
  }

  try {
    const count = await User.countDocuments(filter);
    const users = await User.find(filter, {}, options).skip(skip).limit(limit);
    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .setHeader("X-Total-Count", `${count}`)
      .json(users);
  } catch (err) {
    throw new Error(`Error retrieving users: ${err.message}`);
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    res.status(200).setHeader("Content-Type", "application/json").json(user);
  } catch (err) {
    throw new Error(
      `Error retrieving Users with ID of: ${req.params.userId} ${err.message}`
    );
  }
};

const updateUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    // const user = await User.findOne({ email: req.body.email });

    user.set(req.body);
    // const update = { ...req.body };
    // const updated = await User.findByIdAndUpdate(req.user._id, update, {
    //   new: true,
    // });
    const updated = await user.save();

    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .json({ success: true, message: "message", updated });
  } catch (err) {
    throw new Error(
      `Error updating User with ID of: ${req.params.userId} ${err.message}`
    );
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

const login = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password)
    throw new Error("Please provide username and password");

  const user = await User.findOne({ username }).select("+password");
  if (!user) {
    return res.status(400).json({ success: false, message: "User not found" });
  }
  //   if (!user.isVerified) {
  //     // Send email with verification link or code
  //     await sendVerificationLogin(user.email);
  //   }
  //   if (!user.isVerified) {
  //     return res
  //       .status(400)
  //       .json({
  //         success: false,
  //         message:
  //           "You are not verified. Check your email for the verification link",
  //       });
  //   }
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid credentials" });
  }
  sendTokenResponse(user, 200, res);
};

const logout = async (req, res, next) => {
  res
    .status(200)
    .cookie("token", "none", {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true,
    })
    .json({ success: true, msg: `Successfully logged out` });
};

module.exports = {
  createUser,
  getUsers,
  login,
  logout,
  getUser,
  updateUser,
};
