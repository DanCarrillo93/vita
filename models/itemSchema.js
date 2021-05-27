const mongoose = require("mongoose");
const { Schema } = mongoose;

const ItemSchema = new Schema({
  weapon: {
    type: String,
    ref: "Weapon",
  },
  // skinId: String, sub_type: String, skin: String, condition: String, URL: String, rarity: String
});

module.exports = ItemSchema;
