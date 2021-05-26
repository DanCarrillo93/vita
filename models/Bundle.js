const mongoose = require("mongoose");
const {Schema} = mongoose;

const BundleSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        indexed: true
    },
    bundle_type: [{
        type: String,
        required: true
    }],
    bundlePrice: [{
        type: Number,
        required: true
    }],
   items: [{
        itemId: String, skinId: String, sub_type: String, skin: String, condition: String, URL: String, rarity: String, 
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

const Bundle = mongoose.model("Bundle", BundleSchema);

module.exports = Bundle;