const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// function validate email
var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/,
      "Please fill a valid email address"
    ]
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
