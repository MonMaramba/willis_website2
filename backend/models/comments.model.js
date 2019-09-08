const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    userName: { type: String, required: true },
    email: { type: email, required: true },
    comment: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("comment", commentSchema);

module.exports = User;
