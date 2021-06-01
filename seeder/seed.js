const mongoose = require("mongoose");
const db = require("../models");
require("dotenv").config();


async function seed() { 
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const weaponNames = [
    "AK-47",
    "AUG",
    "AWP",
    "CZ75-Auto",
    "Desert Eagle",
    "Dual Berettas",
    "FAMAS",
    "Five-SeveN",
    "G3SG1",
    "Galil AR",
    "Glock-18",
    "M249",
    "M4A1-S",
    "M4A4",
    "MAC-10",
    "MAG-7",
    "MP5-SD",
    "MP7",
    "MP9",
    "Negev",
    "Nova",
    "P2000",
    "P250",
    "P90",
    "PP-Bizon",
    "R8 Revolver",
    "SCAR-20",
    "SG 553",
    "SSG 08",
    "Sawed-Off",
    "Tec-9",
    "UMP-45",
    "USP-S",
    "XM1014",
    "Bayonet",
    "Bowie Knife",
    "Butterfly Knife",
    "Classic Knife",
    "Falchion Knife",
    "Flip Knife",
    "Gut Knife",
    "Huntsman Knife",
    "Karambit",
    "M9 Bayonet",
    "Navaja Knife",
    "Nomad Knife",
    "Paracord Knife",
    "Shadow Daggers",
    "Skeleton Knife",
    "Stiletto Knife",
    "Survival Knife",
    "Talon Knife",
    "Ursus Knife"
];

db.Weapon.deleteMany({});

for(let i = 0; i < weaponNames.length; i += 1) {
    const skinList = require(`../client/src/data/skins/${weaponNames[i]}.json`);
    db.Weapon.collection.insertMany(skinList)
      .then(data => {
        console.log(weaponNames[i] + " " + data.result.n + " records inserted!");
        if(i === weaponNames.length - 1) {
          process.exit(0);
        };
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });
};
}

seed();