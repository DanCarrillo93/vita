const mongoose = require("mongoose");
const { Schema } = mongoose;

const BundleSchema = new mongoose.Schema({
  // id: {
  //   type: String,
  //   required: true,
  //   unique: true,
  //   indexed: true,
  // },
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
  items: [
    {
      _id: {
        type: Schema.Types.ObjectId,
      },
      weapon: {
        type: String,
        ref: "Weapon",
      },
    },
  ],
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
