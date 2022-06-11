const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
