const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AttendanceSchema = new Schema(
  {
    student: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    subject: {
      type: Schema.Types.ObjectId,
      ref: "Subject",
    },
    status: {
      type: String,
      enum: ["Late", "Absent", "Present"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Attendance", AttendanceSchema);
