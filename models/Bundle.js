const mongoose = require("mongoose");
const ItemSchema = require("./itemSchema");
const { Schema } = mongoose;

const BundleSchema = new mongoose.Schema({
  // id: {
  //   type: String,
  //   required: true,
  //   unique: true,
  //   indexed: true,
  // },
  mvp: {
    name: { type: String },
    url: { type: String },
  },
  bundle_type: [
    {
      type: String,
      required: true,
      _id: false,
    },
  ],
  bundle_price: {
    type: Number,
    required: true,
  },
  items: [ItemSchema],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
    default: "Ready",
  },
});

const Bundle = mongoose.model("Bundle", BundleSchema);

module.exports = Bundle;
