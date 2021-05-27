const fs = require("fs");
const data = require("./data.json");

const weaponName = data.map(item => item.sub_type);

const weaponList = [];

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

fs.writeFile( "./weapons.json", JSON.stringify(weapons, null, 4), () => {} );

weapons.forEach((weapon) => {
    const skin_list = data.filter(entry => {
        if (entry.sub_type === weapon.weapon) {
            return entry;
        };
    });
    fs.writeFile(`./skins/${weapon.weapon}.json`, JSON.stringify(skin_list, null, 4), () => {} );

    const skin_type = [];
    skin_list.forEach(skin => {
        if (!skin_type.includes(skin.skin)) {
            skin_type.push(skin.skin);
        };
    });

    fs.writeFile(`./skins/${weapon.weapon}-skinList.json`, JSON.stringify(skin_type, null, 4), () => {} );
})
