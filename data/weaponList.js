const fs = require("fs");
const data = require("./data.json");

const weaponName = data.map(item => item.sub_type);

let weaponList = [];

weaponName.forEach(name => {
    if (!weaponList.includes(name)) {
        weaponList.push(name);
    }
});

const weapons = weaponList.map((weapon,index) => {
    return {
        id: index,
        weapon
    }
});

// fs.writeFile( "./weapons.json", JSON.stringify(weapons, null, 4), () => {} );

weapons.forEach((weapon, index) => {
    const skin_list = data.filter(entry => {
        if (entry.sub_type === weapon.weapon) {
            return entry;
        };
    });
    // fs.writeFile(`./skins/${index+1}-${weapon.weapon}.json`, JSON.stringify(skin_list, null, 4), () => {} );
})
