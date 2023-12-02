const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubjectSchema = new Schema(
  {
    subjectCode: {
      type: String,
      required: true,
    },
    subjectName: {
      type: String,
      required: true,
    },
    instructor: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Subject", SubjectSchema);
