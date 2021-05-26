const mongoose = require("mongoose");
const { hash, compare } = require("bcrypt");
const { isEmail } = require("../util/validate");
const uuid = require("mongoose-uuid");

const HASH_SALT_ROUNDS = 10;

// Add additional fields to the user schema as needed for your app. Feel free to
// modify username, email, and password validations. email as part of the login
// credentials.
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 2,
  },
  steam: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: isEmail,
      message: "Not a valid email address",
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: [8, "Password must contain at least 8 characters."],
  },
  inventory: [{
    itemId: {
      type: String,
      default: uuid.v1,
      unique: true},
      skinId: String, sub_type: String, skin: String, condition: String, URL: String, rarity: String
  }]
});

UserSchema.pre("save", async function hashPassword() {
  if (this.isModified("password")) {
    this.password = await hash(this.password, HASH_SALT_ROUNDS);
  }
});

UserSchema.methods.checkPassword = function (password) {
  // compare returns a promise
  return compare(password, this.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
