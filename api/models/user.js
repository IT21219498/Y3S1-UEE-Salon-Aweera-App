const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String },
  joinDate: { type: Date, default: Date.now },
  verified: { type: Boolean, default: false },
  savedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  verificationToken: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
