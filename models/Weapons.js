const mongoose = require("mongoose");

const WeaponsSchema = new mongoose.Schema({
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
        unique: true
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

const Weapons = mongoose.model("Weapons", WeaponsSchema);

module.exports = Weapons;