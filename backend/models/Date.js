const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DateSchema = new Schema(
  {
    section: {
      type: Schema.Types.ObjectId,
      ref: "Section",
    },
    subject: {
      type: Schema.Types.ObjectId,
      ref: "Subject",
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Date", DateSchema);
