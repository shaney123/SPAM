const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const UserSchema = new Schema(
  {
    email: {
      type: String,
      //   required: [true, "An email is required!"],
      unique: [
        true,
        "The email has already been registered, try to login please!",
      ],
      validate: (email) => {
        return validator.isEmail(email);
      },
    },

    password: {
      type: String,
      required: [true, "Please add a password!"],
      validate: (password) => {
        return validator.isStrongPassword(password);
      },
    },

    username: {
      type: String,
      trim: true,
      unique: [true, "The username is already taken"],
      required: [true, "The username is required"],
      validate: {
        validator: function (value) {
          return validator.isAlphanumeric(value);
        },
        message: "Username can only contain letters and numbers.",
      },
      maxLength: 20,
    },

    firstName: {
      type: String,
      required: [true, "Please input your first name!"],
      trim: true,
      maxlength: [100, "First name is too long"],
    },
    middleName: {
      type: String,
      trim: true,
      maxLength: [50, "Middle name is too long"],
    },
    lastName: {
      type: String,
      required: [true, "Please input your last name!"],
      trim: true,
      maxlength: [50, "Last name is too long"],
    },

    phoneNumber: {
      type: String,
      //   required: [true, "Please enter your phone number!"],
      unique: [true, "Phone number already taken!"],
    },

    gender: {
      type: String,
      //   required: [true, "Please add a gender!"],
      enum: ["Male", "Female", "Other"],
    },

    birthday: {
      type: Date,
      min: "1900-01-01",
      max: Date.now(),
    },

    userType: {
      type: String,
      required: true,
      enum: ["admin", "instructor", "learner"],
      default: "learner",
    },

    address: {
      type: String,
      //   required: true,
    },
    img: {
      type: String,
      // required: true,
    },
    resetPasswordToken: {
      type: String,
    },

    resetPasswordExpire: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    console.log(this);
    console.log("password not modified");
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

UserSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model("User", UserSchema);
