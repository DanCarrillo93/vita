const mongoose = require("mongoose");

const WeaponSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    URL: {
        type: String,
        required: true,
    },
    weapon_type: {
        type: String,
        required: true
    },
    sub_type: {
        type: String,
        required: true
    },
    rarity: {
        type: String,
        required: true
    },
    skin: {
        type: String,
        required: true,
    },
    condition: {
        type: String,
        required: true
    }
});

const Weapon = mongoose.model("Weapon", WeaponSchema);

module.exports = Weapon;