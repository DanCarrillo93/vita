const mongoose = require("mongoose");
const { Schema } = mongoose;

const BundleSchema = new Schema(
  {
    bundle: {
      type: String,
      ref: "Bundle",
    },
    // skinId: String, sub_type: String, skin: String, condition: String, URL: String, rarity: String
  },
  { _id: false }
);

module.exports = BundleSchema;
