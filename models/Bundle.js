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
    bundle_price: {
        type: Number,
        required: true
    },
   items: [{
    type: Schema.Types.ObjectId,
    ref: 'Weapon'
    }],      
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

const Bundle = mongoose.model("Bundle", BundleSchema);

module.exports = Bundle;