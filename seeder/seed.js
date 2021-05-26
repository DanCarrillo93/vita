const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const weaponSeed = [
    {
        name: "AK-47 | Aquamarine Revenge (Battle-Scarred)",
        id: "1759174527",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5gZKKkPLLMrfFqWNU6dNoxL3H94qm3Ffm_RE6amn2ctWXdlI2ZwqB-FG_w-7s0ZK-7cjLzyE37HI8pSGKrIDGOAI",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Aquamarine Revenge",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Aquamarine Revenge (Factory New)",
        id: "1012020677",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5gZKKkPLLMrfFqWdY781lxLuW8Njw31Dn8xc_YTqmJ4DDJFM2ZwqE_ATtx-u7g8C5vpjOzHM263E8pSGKJ1XuG9M",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Aquamarine Revenge",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Aquamarine Revenge (Field-Tested)",
        id: "1011938131",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5gZKKkPLLMrfFqWZU7Mxkh6eU896n0FXk-RJsNzv3cI-WJAA3YFDTqFa2l-u6jJW4uJqdyCBluyEm-z-DyCua9lLK",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Aquamarine Revenge",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Aquamarine Revenge (Minimal Wear)",
        id: "1819967861",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5gZKKkPLLMrfFqWdY781lxLuW8Njw31Dn8xc_YTqmJ4DDJFM2ZwqE_ATtx-u7g8C5vpjOzHM263E8pSGKJ1XuG9M",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Aquamarine Revenge",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Aquamarine Revenge (Well-Worn)",
        id: "2095030666",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5gZKKkPLLMrfFqWZU7Mxkh6eU896n0FXk-RJsNzv3cI-WJAA3YFDTqFa2l-u6jJW4uJqdyCBluyEm-z-DyCua9lLK",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Aquamarine Revenge",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Asiimov (Battle-Scarred)",
        id: "3113432098",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092lnYmGmOHLO77QgHIf6pwpiO-RrIms2AC1-0NkZGihItDBJFVqZgrS_1TswOjn0Z-1vZjMyGwj5HeH24gOlg",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Asiimov",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Asiimov (Factory New)",
        id: "3114548479",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092lnYmGmOHLP7LWnn8fvpMkjOqS99Smiwzk_0VvamH0LIHEdwFqYw2G_QC3lefsjZS4uJXLyWwj5HclxVTx0A",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Asiimov",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Asiimov (Field-Tested)",
        id: "3113384982",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092lnYmGmOHLPr7Vn35cppQiiOuQpoml3wW18xdkNTjxd9CQdwM_ZlrT-lW_kLzu0560vp-azXJ9-n51Q5-Fea0",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Asiimov",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Asiimov (Minimal Wear)",
        id: "3113472303",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092lnYmGmOHLP7LWnn8fvpMkjOqS99Smiwzk_0VvamH0LIHEdwFqYw2G_QC3lefsjZS4uJXLyWwj5HclxVTx0A",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Asiimov",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Asiimov (Well-Worn)",
        id: "3113552610",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092lnYmGmOHLPr7Vn35cppQiiOuQpoml3wW18xdkNTjxd9CQdwM_ZlrT-lW_kLzu0560vp-azXJ9-n51Q5-Fea0",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Asiimov",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Baroque Purple (Battle-Scarred)",
        id: "3608087146",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszedDNH-NOJhJWZh_vxDLPUl31Ipp1w27GWoYmk21Dt8xI9ZGD3coPBIwBvZl6CqQLslObo0MC-6MubnXt9-n51KSM_V14",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Industrial Grade",
        skin: "Baroque Purple",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Baroque Purple (Factory New)",
        id: "3601995596",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszedDNH-NOJhJWZh_vxDLfYkWNFppF10--W89jwjAfk-Ec_Nm6nI4eXIQA2Z1zQrwO9wrjm05C66pidmCR9-n51tb8UILo",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Industrial Grade",
        skin: "Baroque Purple",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Baroque Purple (Field-Tested)",
        id: "3608084104",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszedDNH-NOJhJWZh_vxDLbUkmJE5Yt127uQpYqg21bk80FkajjyJNDGJw4-YVjX-Va6lbvq05LpuMufzHEwpGB8svvQco2Z",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Industrial Grade",
        skin: "Baroque Purple",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Baroque Purple (Minimal Wear)",
        id: "3608086429",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszedDNH-NOJhJWZh_vxDLfYkWNFppF10--W89jwjAfk-Ec_Nm6nI4eXIQA2Z1zQrwO9wrjm05C66pidmCR9-n51tb8UILo",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Industrial Grade",
        skin: "Baroque Purple",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Baroque Purple (Well-Worn)",
        id: "3608084772",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszedDNH-NOJhJWZh_vxDLbUkmJE5Yt127uQpYqg21bk80FkajjyJNDGJw4-YVjX-Va6lbvq05LpuMufzHEwpGB8svvQco2Z",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Industrial Grade",
        skin: "Baroque Purple",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Black Laminate (Battle-Scarred)",
        id: "402846761",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqP_xMq3I2GhTupQpi7DCrY2m3AzkrkZrZWz3cdCRcQBraQvX_lPtxOjugJO07svXiSw0Sdo_N6Y",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Black Laminate",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Black Laminate (Factory New)",
        id: "445185476",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqPv9NLPF2GgEuJFyi-uTotT03A3h_hZlYWv2IdPAcAY8Y1vU-gPrw7rvjJ6-7ZnXiSw034A6uhk",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Black Laminate",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Black Laminate (Field-Tested)",
        id: "2443295957",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqPrxN7LEmyUDsJIh27-YpYmmiVDm_UFuZ2vzJYPDJlRsYw2C8lC5w-fu0Je_6ZrB1zI97TOUU9Z0",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Black Laminate",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Black Laminate (Minimal Wear)",
        id: "310777109",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqPv9NLPF2GgEuJFyi-uTotT03A3h_hZlYWv2IdPAcAY8Y1vU-gPrw7rvjJ6-7ZnXiSw034A6uhk",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Black Laminate",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Black Laminate (Well-Worn)",
        id: "2266846920",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqPrxN7LEmyUDsJIh27-YpYmmiVDm_UFuZ2vzJYPDJlRsYw2C8lC5w-fu0Je_6ZrB1zI97TOUU9Z0",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Black Laminate",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Bloodsport (Factory New)",
        id: "2220112458",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV0966m4-PhOf7Ia_ummJW4NE_3rnHpdujjgK28kE5Y2Gid9WWdQ44YVHS-VS9wr--jJG6tJrAzCBh6D5iuyjdE47G3Q",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Bloodsport",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Bloodsport (Field-Tested)",
        id: "2495944666",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV0966m4-PhOf7Ia_um25V4dB8xO3Hpdn22lWxqUc9Zmr0J9XBIw89M1GGqFC8ybzvgMLvvJ6azSE1viM8pSGK5KY2J5A",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Bloodsport",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Bloodsport (Minimal Wear)",
        id: "2220027148",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV0966m4-PhOf7Ia_ummJW4NE_3rnHpdujjgK28kE5Y2Gid9WWdQ44YVHS-VS9wr--jJG6tJrAzCBh6D5iuyjdE47G3Q",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Bloodsport",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Bloodsport (Well-Worn)",
        id: "2287110472",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV0966m4-PhOf7Ia_um25V4dB8xO3Hpdn22lWxqUc9Zmr0J9XBIw89M1GGqFC8ybzvgMLvvJ6azSE1viM8pSGK5KY2J5A",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Bloodsport",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Blue Laminate (Factory New)",
        id: "310776531",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KHgvLLP7LWnn8fscMpj-qUpNymjVK1_hFrMmmhJ4-Ue1c_YgrUrgS5ybvu18K6vZ-YyWwj5HdyMRX4FA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Blue Laminate",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Blue Laminate (Field-Tested)",
        id: "507806503",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KHgvLLPr7Vn35cppJ02uyUrI2h3wDkrkFsZz-gLdXHIA87MFjTqFm-wevvjcC0tZrPnXp9-n51Y5J6evE",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Blue Laminate",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Blue Laminate (Minimal Wear)",
        id: "312599504",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KHgvLLP7LWnn8fscMpj-qUpNymjVK1_hFrMmmhJ4-Ue1c_YgrUrgS5ybvu18K6vZ-YyWwj5HdyMRX4FA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Blue Laminate",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Blue Laminate (Well-Worn)",
        id: "310796398",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KHgvLLPr7Vn35cppJ02uyUrI2h3wDkrkFsZz-gLdXHIA87MFjTqFm-wevvjcC0tZrPnXp9-n51Y5J6evE",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Blue Laminate",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Cartel (Battle-Scarred)",
        id: "720303779",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszJemkV09-3hpSOm8j8NrrHjyUB7sF33ujAptWh3w3k8xc6YW-iJYOVJwI8Zl3R-FC9wum9gZbtvcnI1zI97fGb_ofx",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Cartel",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Cartel (Factory New)",
        id: "741069236",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszJemkV09-3hpSOm8j4OrzZgiUD7ZJzj7DHoY-iilC1-ENoNWuiI9WWdQI8Z1iE81Tvl7i81J-_6p2b1zI97XPwFCE_",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Cartel",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Cartel (Field-Tested)",
        id: "1827461358",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszJemkV09-3hpSOm8j5Nr_Yg2Yf7ccnjOyVp92liwDg-BVoa236I9SWJgM3YV3TrFm3l-q61pS_7c7KyGwj5HcGMgDZeg",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Cartel",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Cartel (Minimal Wear)",
        id: "720328212",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszJemkV09-3hpSOm8j4OrzZgiUD7ZJzj7DHoY-iilC1-ENoNWuiI9WWdQI8Z1iE81Tvl7i81J-_6p2b1zI97XPwFCE_",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Cartel",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Cartel (Well-Worn)",
        id: "720386235",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszJemkV09-3hpSOm8j5Nr_Yg2Yf7ccnjOyVp92liwDg-BVoa236I9SWJgM3YV3TrFm3l-q61pS_7c7KyGwj5HcGMgDZeg",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Cartel",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Case Hardened (Battle-Scarred)",
        id: "1290083026",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO-kYGdjrmjYuvSwDIAvpAnib3C9o_3jFDsr0JpYWzyJ4eWIA48NQmB_Fm2lbzsm9bi66WZ81pV",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Case Hardened",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Case Hardened (Factory New)",
        id: "310780982",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO6nYeDg7mtYbiJkjoDvcAlj7yVotmtjAfjrkpoZW36IoaWclM3MFnY8lK9k-vnm9bi67lSw9Es",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Case Hardened",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Case Hardened (Field-Tested)",
        id: "939047747",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO7kYSCgvq6Yu-EwzsIuZIj3uiY99WmiwGx_kc9Zjr6JYHBIwM5MFHX-Fi9w-u-1Ij84soNG54bQA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Case Hardened",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Case Hardened (Minimal Wear)",
        id: "2427139555",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO6nYeDg7mtYbiJkjoDvcAlj7yVotmtjAfjrkpoZW36IoaWclM3MFnY8lK9k-vnm9bi67lSw9Es",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Case Hardened",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Case Hardened (Well-Worn)",
        id: "1233481152",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO7kYSCgvq6Yu-EwzsIuZIj3uiY99WmiwGx_kc9Zjr6JYHBIwM5MFHX-Fi9w-u-1Ij84soNG54bQA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Case Hardened",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Elite Build (Battle-Scarred)",
        id: "937277116",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09G3h5SOhe7LO77QgHIf7pJ0iLGS94_2jAOx_BdvZGr2I9eVegVvNV3Q_gW8lbrsgZC875TPnWwj5HcWwWbOUQ",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Elite Build",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Elite Build (Factory New)",
        id: "937252768",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09G3h5SOhe7LP7LWnn8fvJYh3-qR942higTmqBZpYGild4adIQQ5ZA6B_AC3lebo0ce-78vOnGwj5HeAJ9sV6g",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Elite Build",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Elite Build (Field-Tested)",
        id: "937248085",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09G3h5SOhe7LPr7Vn35cpsEl0-2Xrdii3APt-RI4ZG71IdOXelJoZVDX_li7kOu-1MW6uZ_JyHV9-n51hRUaMfs",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Elite Build",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Elite Build (Minimal Wear)",
        id: "937254005",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09G3h5SOhe7LP7LWnn8fvJYh3-qR942higTmqBZpYGild4adIQQ5ZA6B_AC3lebo0ce-78vOnGwj5HeAJ9sV6g",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Elite Build",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Elite Build (Well-Worn)",
        id: "2408710723",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09G3h5SOhe7LPr7Vn35cpsEl0-2Xrdii3APt-RI4ZG71IdOXelJoZVDX_li7kOu-1MW6uZ_JyHV9-n51hRUaMfs",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Elite Build",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Emerald Pinstripe (Battle-Scarred)",
        id: "469502984",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYeDNR-M6_hIW0lvygZITZk2pH8Yt33byV8N-ii1Dn8kVqMWv0IYGQIQ47YQvS_FG4k-i6h8Tq6pjBznBqpGB8snmEYrAC",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Emerald Pinstripe",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Emerald Pinstripe (Factory New)",
        id: "469813783",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYeDNR-M6_hIW0lvygZITdn2xZ_Isj27uSod6kiQbirRE5ZW7wcdPEdVU-Y1vYqVa6xe--jZXutZqYmHNkpGB8sorXHHb4",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Emerald Pinstripe",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Emerald Pinstripe (Field-Tested)",
        id: "2433040925",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYeDNR-M6_hIW0lvygZITck29Y_cg_2L_D992hjQ21-kU-NT_xIY-TegM8ZgrX_Fe5wbjoh8fqvM7OzXNl7z5iuyj7hHPqsg",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Emerald Pinstripe",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Emerald Pinstripe (Minimal Wear)",
        id: "1275881771",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYeDNR-M6_hIW0lvygZITdn2xZ_Isj27uSod6kiQbirRE5ZW7wcdPEdVU-Y1vYqVa6xe--jZXutZqYmHNkpGB8sorXHHb4",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Emerald Pinstripe",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Emerald Pinstripe (Well-Worn)",
        id: "469509623",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYeDNR-M6_hIW0lvygZITck29Y_cg_2L_D992hjQ21-kU-NT_xIY-TegM8ZgrX_Fe5wbjoh8fqvM7OzXNl7z5iuyj7hHPqsg",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Emerald Pinstripe",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Fire Serpent (Battle-Scarred)",
        id: "310785310",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszOeC9H_9mkhIWFg8j1OO-GqWlD6dN-teHE9JrsxgDl_BBoYmD6JIbHJwdsYFiDr1K7kLvpjZPvu8nAmHtqvSkm5i6IyxKpwUYbkchkGw4",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Fire Serpent",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Fire Serpent (Factory New)",
        id: "2258156525",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszOeC9H_9mkhIWFg8j1OO-GqWlD6dN-teXI8oThxg3n8kM5ZD-nJI-UJ1c2MFjU-VXolezugZXpvMyan3I3v3Qjty2OlhKpwUYbndZ_4hw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Fire Serpent",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Fire Serpent (Field-Tested)",
        id: "310779465",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszOeC9H_9mkhIWFg8j1OO-GqWlD6dN-teTE8YXghRrkqRVqMGzzIYeTIAVqaQuErlbvlb-80JfuusvJmHFr6SRxsXzfm0fkn1gSOc02RC4r",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Fire Serpent",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Fire Serpent (Minimal Wear)",
        id: "310791287",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszOeC9H_9mkhIWFg8j1OO-GqWlD6dN-teXI8oThxg3n8kM5ZD-nJI-UJ1c2MFjU-VXolezugZXpvMyan3I3v3Qjty2OlhKpwUYbndZ_4hw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Fire Serpent",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Fire Serpent (Well-Worn)",
        id: "2175069665",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszOeC9H_9mkhIWFg8j1OO-GqWlD6dN-teTE8YXghRrkqRVqMGzzIYeTIAVqaQuErlbvlb-80JfuusvJmHFr6SRxsXzfm0fkn1gSOc02RC4r",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Fire Serpent",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | First Class (Battle-Scarred)",
        id: "2484893436",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszPYzhH4uO6kYGfn_LmDLrawjxu4MBwnPCP9Img0QXn8hJpNmnzLYaXe1I9aQyBqAS7kru7gsO6vc_Km3pr6SB252GdwUIsOuqCcA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "First Class",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | First Class (Factory New)",
        id: "520025695",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszPYzhH4uO6kYGfn_LmDLrawjxu5Mx2gv2PrNqn2lLkr0Fkaj36LNfEdwY8YlCD-gK3xOjphpfuu56bmnFivSF3sWGdwUIT_NQ9Tg",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "First Class",
        condition: "Factory New"
    },
    {
        name: "AK-47 | First Class (Field-Tested)",
        id: "1262222494",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszPYzhH4uO6kYGfn_LmDLrawjxu5cB1g_zMu9rw0Fbl-kJuY2r3cI-RIVI-MlzTr1foxOe6hcC-6ZvPnCFquChz5XjD30vgHKsTYF0",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "First Class",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | First Class (Minimal Wear)",
        id: "519998054",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszPYzhH4uO6kYGfn_LmDLrawjxu5Mx2gv2PrNqn2lLkr0Fkaj36LNfEdwY8YlCD-gK3xOjphpfuu56bmnFivSF3sWGdwUIT_NQ9Tg",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "First Class",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | First Class (Well-Worn)",
        id: "2066586042",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszPYzhH4uO6kYGfn_LmDLrawjxu5cB1g_zMu9rw0Fbl-kJuY2r3cI-RIVI-MlzTr1foxOe6hcC-6ZvPnCFquChz5XjD30vgHKsTYF0",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "First Class",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Frontside Misty (Battle-Scarred)",
        id: "1361007858",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08u_mpSOhcjnI7TDglRZ7cRnk6eYp4-gig2w_Uc9N26mIoCXdg5sMg2G_1O8le_nhp-6753AyHYxvSAn-z-DyG61se40",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Frontside Misty",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Frontside Misty (Factory New)",
        id: "1804094201",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08u_mpSOhcjnI7TDglRd4cJ5nqeSrY_x2VDlqBZrZTr2LIfAe1RvYgzW_Va6kL3u0JG8vJ7NyyQwunEj-z-DyIN9IvW2",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Frontside Misty",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Frontside Misty (Field-Tested)",
        id: "1650908310",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08u_mpSOhcjnI7TDglRc7cF4n-SPpI-iigLg80ZvZzryd4_GI1Q6Yg3VqFe4w-y90JLo753NzXtmsnEl4mGdwUIuRPhSEw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Frontside Misty",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Frontside Misty (Minimal Wear)",
        id: "2403023248",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08u_mpSOhcjnI7TDglRd4cJ5nqeSrY_x2VDlqBZrZTr2LIfAe1RvYgzW_Va6kL3u0JG8vJ7NyyQwunEj-z-DyIN9IvW2",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Frontside Misty",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Frontside Misty (Well-Worn)",
        id: "1310109885",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08u_mpSOhcjnI7TDglRc7cF4n-SPpI-iigLg80ZvZzryd4_GI1Q6Yg3VqFe4w-y90JLo753NzXtmsnEl4mGdwUIuRPhSEw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Frontside Misty",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Fuel Injector (Battle-Scarred)",
        id: "1681994122",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08-jhIWZlP_1IbzUklRZ7cRnk6eSp92h2gGwrkRvZGymI4aVcwY5ZVuFrAS5xuy605e1v5_PznEyvyBx-z-DyHxgUuDa",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Fuel Injector",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Fuel Injector (Factory New)",
        id: "1560600321",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08-jhIWZlP_1IbzUklRd4cJ5nqeZ9Nzx3Qex80c-ZGn3LYWTdFc9NFuEqAO8xLrtjMC4u56dznQ36XVw-z-DyK64IMQ5",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Fuel Injector",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Fuel Injector (Field-Tested)",
        id: "2398779579",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08-jhIWZlP_1IbzUklRc7cF4n-SPpIr33gS1rkJqYGD7J4GQcQY5aFCG-lHrlO650JLv6ZzMziA2vXMgtmGdwULg8tCd0w",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Fuel Injector",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Fuel Injector (Minimal Wear)",
        id: "1560455078",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08-jhIWZlP_1IbzUklRd4cJ5nqeZ9Nzx3Qex80c-ZGn3LYWTdFc9NFuEqAO8xLrtjMC4u56dznQ36XVw-z-DyK64IMQ5",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Fuel Injector",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Fuel Injector (Well-Worn)",
        id: "2001464428",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08-jhIWZlP_1IbzUklRc7cF4n-SPpIr33gS1rkJqYGD7J4GQcQY5aFCG-lHrlO650JLv6ZzMziA2vXMgtmGdwULg8tCd0w",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Fuel Injector",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Hydroponic (Battle-Scarred)",
        id: "992313987",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhh3szKcDBA49OJnpWFkPvxDLPUl31IppQoiOyXodSj21Dn-0o-Zmv3ddeRJlU2Ml7Xq1fowr2-gcK075SYzHJ9-n51k3_26so",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Hydroponic",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Hydroponic (Factory New)",
        id: "1322336689",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhh3szKcDBA49OJnpWFkPvxDLfYkWNFppwpie2Rp9_w0VDm-UNrMj30IoPHdAY-M1rY-1K7w7291pO8vJTJzHN9-n51xLwwH8g",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Hydroponic",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Hydroponic (Field-Tested)",
        id: "992220845",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhh3szKcDBA49OJnpWFkPvxDLbUkmJE5YsoibiSrY6m2lbi_Ec4Y2z0dY6ccgJsaF3Q-gK_k-e9h5_qtMnOnSM1pGB8svbIhxYt",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Hydroponic",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Hydroponic (Minimal Wear)",
        id: "992246530",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhh3szKcDBA49OJnpWFkPvxDLfYkWNFppwpie2Rp9_w0VDm-UNrMj30IoPHdAY-M1rY-1K7w7291pO8vJTJzHN9-n51xLwwH8g",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Hydroponic",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Hydroponic (Well-Worn)",
        id: "1121699897",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhh3szKcDBA49OJnpWFkPvxDLbUkmJE5YsoibiSrY6m2lbi_Ec4Y2z0dY6ccgJsaF3Q-gK_k-e9h5_qtMnOnSM1pGB8svbIhxYt",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Hydroponic",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Jaguar (Battle-Scarred)",
        id: "527679328",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYcDNW5Nmkq4GAw6DLO77QgHIf6ZQmju_C9NT00QCw_kpkZDrwdtWWIVA3YA2G8li2kLvv1pG475vMwWwj5He0r7zIMQ",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Jaguar",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Jaguar (Factory New)",
        id: "527750372",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYcDNW5Nmkq4GAw6DLP7LWnn8fvscmibGTpdSmigGyqRFrYm_wJdfBdQ84YAmD-1S6wrru08W-7ZianWwj5HfSt_Eogg",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Jaguar",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Jaguar (Field-Tested)",
        id: "787584217",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYcDNW5Nmkq4GAw6DLPr7Vn35cpschiOiTpNvx2QzmqUJkZDqnJoWRcgQ7NQvQ_FnsxunugMfv6MucyiB9-n51SuyeNcE",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Jaguar",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Jaguar (Minimal Wear)",
        id: "527663032",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYcDNW5Nmkq4GAw6DLP7LWnn8fvscmibGTpdSmigGyqRFrYm_wJdfBdQ84YAmD-1S6wrru08W-7ZianWwj5HfSt_Eogg",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Jaguar",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Jaguar (Well-Worn)",
        id: "527685518",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYcDNW5Nmkq4GAw6DLPr7Vn35cpschiOiTpNvx2QzmqUJkZDqnJoWRcgQ7NQvQ_FnsxunugMfv6MucyiB9-n51SuyeNcE",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Jaguar",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Jet Set (Battle-Scarred)",
        id: "520043688",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszfdDFO08iklZaOm_LwDLrawjxu4MBwnPCPrNjwiwTlr0ZuYmv2IoCTcgY5N1nT_VC8yb--08C-tJSayHBhuyN352GdwULxcInyhw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Jet Set",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Jet Set (Factory New)",
        id: "1503346502",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszfdDFO08iklZaOm_LwDLrawjxu5Mx2gv2PotytiQHnqhBoZGqnI9XBcgQ-Yl_Y_Vfvyey9g8S4753JzSA1s3Eh5GGdwUIoc5a5cw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Jet Set",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Jet Set (Field-Tested)",
        id: "1993586050",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszfdDFO08iklZaOm_LwDLrawjxu5cB1g_zMu4is2FDnrxBoZGz2JYOcdVc6MwuDrlPqxO_rjZPtvZ3AzHY3viQq5S3D30vg5o4KWoA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Jet Set",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Jet Set (Minimal Wear)",
        id: "1237963018",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszfdDFO08iklZaOm_LwDLrawjxu5Mx2gv2PotytiQHnqhBoZGqnI9XBcgQ-Yl_Y_Vfvyey9g8S4753JzSA1s3Eh5GGdwUIoc5a5cw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Jet Set",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Jet Set (Well-Worn)",
        id: "519992253",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszfdDFO08iklZaOm_LwDLrawjxu5cB1g_zMu4is2FDnrxBoZGz2JYOcdVc6MwuDrlPqxO_rjZPtvZ3AzHY3viQq5S3D30vg5o4KWoA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Jet Set",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Jungle Spray (Battle-Scarred)",
        id: "727138120",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zbYS9D9eO8gY6Mm_LLO77QgHIfvMcliLiTrN-j0Fa2_RdoMGj3cICRJAU5Y1CG8wC2kLy71JG5uJ3ByGwj5Hf749CJhg",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Industrial Grade",
        skin: "Jungle Spray",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Jungle Spray (Factory New)",
        id: "310916740",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zbYS9D9eO8gY6Mm_LLP7LWnn8f6cMk2L3E9NqkilHm8hI-a2inctSWcAc8Zl-C81nvw-_uhpW06MjKzmwj5Hd9a9y0Zw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Industrial Grade",
        skin: "Jungle Spray",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Jungle Spray (Field-Tested)",
        id: "620121692",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zbYS9D9eO8gY6Mm_LLPr7Vn35cppEn2LiRo9mn2gDt-RVuZzr0doOQcVA5NVnU_ge4wuru15-46svMzyZ9-n51EmbODt4",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Industrial Grade",
        skin: "Jungle Spray",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Jungle Spray (Minimal Wear)",
        id: "676146370",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zbYS9D9eO8gY6Mm_LLP7LWnn8f6cMk2L3E9NqkilHm8hI-a2inctSWcAc8Zl-C81nvw-_uhpW06MjKzmwj5Hd9a9y0Zw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Industrial Grade",
        skin: "Jungle Spray",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Jungle Spray (Well-Worn)",
        id: "310778054",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zbYS9D9eO8gY6Mm_LLPr7Vn35cppEn2LiRo9mn2gDt-RVuZzr0doOQcVA5NVnU_ge4wuru15-46svMzyZ9-n51EmbODt4",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Industrial Grade",
        skin: "Jungle Spray",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Legion of Anubis (Battle-Scarred)",
        id: "3955302901",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924gYKChMj8NrrHjyUHuJUi3uuUrdmkjgPl-UdqYWr6LYCUdlM9MlnZ_lK-ku_shZ677c-f1zI97bR0BUMC",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Legion of Anubis",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Legion of Anubis (Factory New)",
        id: "3955334989",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924gYKChMj4OrzZgiUGv5wo3uuY8dr02lLn-0FsMGmgIdfEelU3Ml-G_VG9xOm7gZC87suf1zI97aiJAbeK",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Legion of Anubis",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Legion of Anubis (Field-Tested)",
        id: "3946606207",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924gYKChMj5Nr_Yg2YfvcQp3LHEp46i0QLs_kJsN236IYKRIQE2aQuG8ljrxe7phZ-5v8_MnWwj5HdtkEFgKg",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Legion of Anubis",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Legion of Anubis (Minimal Wear)",
        id: "3955317693",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924gYKChMj4OrzZgiUGv5wo3uuY8dr02lLn-0FsMGmgIdfEelU3Ml-G_VG9xOm7gZC87suf1zI97aiJAbeK",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Legion of Anubis",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Neon Revolution (Battle-Scarred)",
        id: "1935618669",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924lZKIn-7LO77QgHIfusd30-3H8NqgilGwrRBpZG7wIdDHdgc7YV3Rq1e-x-a5gp_u6ZSYmmwj5HcS3vwV9A",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Neon Revolution",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Neon Revolution (Factory New)",
        id: "2088302278",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924lZKIn-7LP7LWnn8fvsAo0u-R9trzi1bs-hI9NjqiJIXGdwBrNAzW8li4w7jqhcW16cvAzWwj5HdQlBgtMw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Neon Revolution",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Neon Revolution (Field-Tested)",
        id: "2410824263",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924lZKIn-7LPr7Vn35cppwl3OyVp9Txi1Gy_0Y9MDjyd4fGJFVsZFGG-gC5xLvo1pfouJ3Bzyd9-n51-K95osI",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Neon Revolution",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Neon Revolution (Minimal Wear)",
        id: "1934611432",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924lZKIn-7LP7LWnn8fvsAo0u-R9trzi1bs-hI9NjqiJIXGdwBrNAzW8li4w7jqhcW16cvAzWwj5HdQlBgtMw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Neon Revolution",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Neon Revolution (Well-Worn)",
        id: "1935617223",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924lZKIn-7LPr7Vn35cppwl3OyVp9Txi1Gy_0Y9MDjyd4fGJFVsZFGG-gC5xLvo1pfouJ3Bzyd9-n51-K95osI",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Neon Revolution",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Neon Rider (Battle-Scarred)",
        id: "2961952265",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJM6dO4q5KCk_LmDLPUl31IppMkjuyWrY7zjA21qEJlMj-mJ4GTcw9oNQvRr1O3krzn0JO46szMnSR9-n51qFfzmsM",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Neon Rider",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Neon Rider (Factory New)",
        id: "2955382161",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJM6dO4q5KCk_LmDLfYkWNFppwj2rCQrN733QXgqEc5MGD7JYKTIAI5ZV-ErwK2krvrhZHttZrOmnp9-n51haggJHM",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Neon Rider",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Neon Rider (Field-Tested)",
        id: "2952064254",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJM6dO4q5KCk_LmDLbUkmJE5YshjL2W8NWn3Qy1_0FoMTryLNSQewE9MFDX8wTvlee-0MC67cuayCFnpGB8srRZP464",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Neon Rider",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Neon Rider (Minimal Wear)",
        id: "2953730132",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJM6dO4q5KCk_LmDLfYkWNFppwj2rCQrN733QXgqEc5MGD7JYKTIAI5ZV-ErwK2krvrhZHttZrOmnp9-n51haggJHM",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Neon Rider",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Neon Rider (Well-Worn)",
        id: "2962462997",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJM6dO4q5KCk_LmDLbUkmJE5YshjL2W8NWn3Qy1_0FoMTryLNSQewE9MFDX8wTvlee-0MC67cuayCFnpGB8srRZP464",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Neon Rider",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Orbit Mk01 (Battle-Scarred)",
        id: "2316457556",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJegJB49C5mpnbxsjmNr_unm5Q_tw_iL6Tp4322gTi-UBrYGugItKTJwQ-Zg6F-gXsyLu5gZPptJzMzXFn7j5iuyhzWOiRzw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Orbit Mk01",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Orbit Mk01 (Factory New)",
        id: "2453969846",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJegJB49C5mpnbxsjmNr_ummJW4NE_iL-ZrYj03wLl_hFqNm71cteWdlA5Zl2F-FG-yO_r0cW4uMnMynFl6T5iuyjnxSwaOw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Orbit Mk01",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Orbit Mk01 (Field-Tested)",
        id: "2457167738",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJegJB49C5mpnbxsjmNr_um25V4dB8xLnH9o3w3wHmqhFrYGGlJ4fGdQQ6MgnQ_FS8lb_nhJC06MjOzyBruiE8pSGK4ZbPlSA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Orbit Mk01",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Orbit Mk01 (Minimal Wear)",
        id: "2316457557",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJegJB49C5mpnbxsjmNr_ummJW4NE_iL-ZrYj03wLl_hFqNm71cteWdlA5Zl2F-FG-yO_r0cW4uMnMynFl6T5iuyjnxSwaOw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Orbit Mk01",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Orbit Mk01 (Well-Worn)",
        id: "2316603343",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJegJB49C5mpnbxsjmNr_um25V4dB8xLnH9o3w3wHmqhFrYGGlJ4fGdQQ6MgnQ_FS8lb_nhJC06MjOzyBruiE8pSGK4ZbPlSA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Orbit Mk01",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Panthera onca (Battle-Scarred)",
        id: "4142236478",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJI7dujlZK0n_L1JaKfwT1UvcAg3uyZ9970jAe1qEdkZz2gIYDGdwQ-ZFiB-QC3wOu91JPtv4OJlyVHc82YRQ",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Panthera onca",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Panthera onca (Factory New)",
        id: "4142274370",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJI7dujlZK0m_7zO6-fzzlV7J0kjryY8d6j2QGxqhFlYzulLIDBdVM6NQ7WrwS3lO7mgJe_voOJlyVA-lcWLw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Panthera onca",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Panthera onca (Field-Tested)",
        id: "4142815677",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJI7dujlZK0mvLwOq7c2D8AsJIojO3C99uhilbmqRY9azvxJY-ddwI9ZQ7Tr1m2yOvn15C0vM_XiSw0nfsJ2qI",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Panthera onca",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Panthera onca (Minimal Wear)",
        id: "4116088904",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJI7dujlZK0m_7zO6-fzzlV7J0kjryY8d6j2QGxqhFlYzulLIDBdVM6NQ7WrwS3lO7mgJe_voOJlyVA-lcWLw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Panthera onca",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Panthera onca (Well-Worn)",
        id: "4141928994",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJI7dujlZK0mvLwOq7c2D8AsJIojO3C99uhilbmqRY9azvxJY-ddwI9ZQ7Tr1m2yOvn15C0vM_XiSw0nfsJ2qI",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Panthera onca",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Phantom Disruptor (Battle-Scarred)",
        id: "3761880092",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJenAWu-OmnIGFg_j5DL_YhXlE-NF-mNbJ8I3jkRrhqUc_NW71cdXEc1A8ZgyFrgTrlezphMTouJzBmCdrsyVztHvcnxyzn1gSOdeAPgVh",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Phantom Disruptor",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Phantom Disruptor (Factory New)",
        id: "3770685021",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJenAWu-OmnIGFg_j5DL_YhXlE-NF-mNbN_Iv9nBq3-kc6MDyhcYeSIwJtYAnV-ljrlb3qjJHuv56dmiBq6CV2tiuMnBfln1gSOdwFZ75X",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Phantom Disruptor",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Phantom Disruptor (Field-Tested)",
        id: "3761894325",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJenAWu-OmnIGFg_j5DL_YhXlE-NF-mNbM8Ij8nVn6_EQ5ZWr7cdWRdwI9YAmDqwTtwezrg8W9vprNmiRk63Ih4neInBHiiAYMMLIT_kAueQ",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Phantom Disruptor",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Phantom Disruptor (Minimal Wear)",
        id: "3763197061",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJenAWu-OmnIGFg_j5DL_YhXlE-NF-mNbN_Iv9nBq3-kc6MDyhcYeSIwJtYAnV-ljrlb3qjJHuv56dmiBq6CV2tiuMnBfln1gSOdwFZ75X",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Phantom Disruptor",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Phantom Disruptor (Well-Worn)",
        id: "3771211319",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJenAWu-OmnIGFg_j5DL_YhXlE-NF-mNbM8Ij8nVn6_EQ5ZWr7cdWRdwI9YAmDqwTtwezrg8W9vprNmiRk63Ih4neInBHiiAYMMLIT_kAueQ",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Phantom Disruptor",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Point Disarray (Battle-Scarred)",
        id: "1440546486",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08y5nY6fqPP9ILrDhGpI1810i__Yu4_w0QTtrkA-N2zyJICRegU6NAnY_1HrwLjnhcfvv8jMznBgv3J37X3D30vgTisad-g",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Point Disarray",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Point Disarray (Factory New)",
        id: "2061036409",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08y5nY6fqPP9ILrDhGpI18l4jeHVu4702FLiqBA4MDv6JYHEIwRsNQ3Srwe-wu_t1pO76JrPyiNlu3Qh4X7D30vg5znacIE",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Point Disarray",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Point Disarray (Field-Tested)",
        id: "1445268826",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08y5nY6fqPP9ILrDhGpI18h0juDU-MLx2gKy8xFqMDr2IIORcAU6MlnS_Vjtxu7rhcK-u5-cyXZqsiEg7HnUgVXp1kpd_x09",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Point Disarray",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Point Disarray (Minimal Wear)",
        id: "1440505236",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08y5nY6fqPP9ILrDhGpI18l4jeHVu4702FLiqBA4MDv6JYHEIwRsNQ3Srwe-wu_t1pO76JrPyiNlu3Qh4X7D30vg5znacIE",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Point Disarray",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Point Disarray (Well-Worn)",
        id: "2175244102",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08y5nY6fqPP9ILrDhGpI18h0juDU-MLx2gKy8xFqMDr2IIORcAU6MlnS_Vjtxu7rhcK-u5-cyXZqsiEg7HnUgVXp1kpd_x09",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Point Disarray",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Predator (Battle-Scarred)",
        id: "310777457",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zSdD9Q7d-3mb-DkvbiKvWHxWkC7ZMgieuS8I_x2Ae2rUQ5Nz2lII-VJw8-aAmC8la_x-3rg5-1ot2Xnr-y3gEW",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Industrial Grade",
        skin: "Predator",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Predator (Factory New)",
        id: "310827143",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zSdD9Q7d-3mb-HnvD8J_WEkDoE65x03rjDrI322QfhqUtrMD2icNSRcgFtaFDX-AS9wL3u05S1ot2Xnn9ZGujG",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Industrial Grade",
        skin: "Predator",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Predator (Field-Tested)",
        id: "310777007",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zSdD9Q7d-3mb-GkvP9JraflG4J7ZMg0-rHrI2lilewqEJvZmCid4aXcQ9tZQrU-gLvxu7pjZe5vIOJlyV3pXZeQg",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Industrial Grade",
        skin: "Predator",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Predator (Minimal Wear)",
        id: "310777508",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zSdD9Q7d-3mb-HnvD8J_WEkDoE65x03rjDrI322QfhqUtrMD2icNSRcgFtaFDX-AS9wL3u05S1ot2Xnn9ZGujG",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Industrial Grade",
        skin: "Predator",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Predator (Well-Worn)",
        id: "310779750",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zSdD9Q7d-3mb-GkvP9JraflG4J7ZMg0-rHrI2lilewqEJvZmCid4aXcQ9tZQrU-gLvxu7pjZe5vIOJlyV3pXZeQg",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Industrial Grade",
        skin: "Predator",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Rat Rod (Battle-Scarred)",
        id: "3608085595",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09K_loKHkuXLO77QgHIfscAojr2Up92higzk-BY-Ym_1JYaRcwY8Ml_U8wO2wurvjJW_usnIy2wj5HeLdRMtkA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Rat Rod",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Rat Rod (Factory New)",
        id: "3600925766",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09K_loKHkuXLP7LWnn8fucYl2rvFptWgigLm8xI9Zm_1I4SWe1NrMlzU_FW-lem5g5a_6JrMzWwj5HfI4UkLHw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Rat Rod",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Rat Rod (Field-Tested)",
        id: "3600925940",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09K_loKHkuXLPr7Vn35cppN3j-qYoNWn0Fey8hFoazj0ddKWewc8M1_Ur1nqw-i8gZHtuZzKmiN9-n51RnxxtpI",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Rat Rod",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Rat Rod (Minimal Wear)",
        id: "3611413092",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09K_loKHkuXLP7LWnn8fucYl2rvFptWgigLm8xI9Zm_1I4SWe1NrMlzU_FW-lem5g5a_6JrMzWwj5HfI4UkLHw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Rat Rod",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Rat Rod (Well-Worn)",
        id: "3608084097",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09K_loKHkuXLPr7Vn35cppN3j-qYoNWn0Fey8hFoazj0ddKWewc8M1_Ur1nqw-i8gZHtuZzKmiN9-n51RnxxtpI",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Rat Rod",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Red Laminate (Battle-Scarred)",
        id: "1145751013",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4iOluHtfb6EzjsA6pQi3ruZrd723wfi_0I4amjzIoeTJAQ8aFzT-wPvx-26gpei_MOe6z3geXU",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Red Laminate",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Red Laminate (Factory New)",
        id: "310830866",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4yCkP_gfeqIzz0DuMAp2rGUotWj2w3m_Uc_NW72J9KVdAM-ZlrRqFXsku-5hpGi_MOeuhMPC0E",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Red Laminate",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Red Laminate (Field-Tested)",
        id: "310776621",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q42Ok_7hPvWBkjJU68Mkju2SpY2gjgWy80FlMmihLISdI1M5M1nXq1m3w-fvjZK8ot2XnqH-Ks6p",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Red Laminate",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Red Laminate (Minimal Wear)",
        id: "1815340641",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4yCkP_gfeqIzz0DuMAp2rGUotWj2w3m_Uc_NW72J9KVdAM-ZlrRqFXsku-5hpGi_MOeuhMPC0E",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Red Laminate",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Red Laminate (Well-Worn)",
        id: "2418224243",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q42Ok_7hPvWBkjJU68Mkju2SpY2gjgWy80FlMmihLISdI1M5M1nXq1m3w-fvjZK8ot2XnqH-Ks6p",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Red Laminate",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Redline (Battle-Scarred)",
        id: "360502057",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqP_xMq3I2D0B65Jy2b7FrNqgjQXn8hVvazj3J4OdIFRsY1nYrgDtxO27h8W5uZvXiSw07ljG5dE",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Redline",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Redline (Field-Tested)",
        id: "1624525998",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPrxN7LEmyVQ7MEpiLuSrYmnjQO3-UdsZGHyd4_Bd1RvNQ7T_FDrw-_ng5Pu75iY1zI97bhLsvQz",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Redline",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Redline (Minimal Wear)",
        id: "360578658",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPv9NLPF2G1UsZFw373Cp96kigbgrUBuY22nLIWUcgRvN17Y8lnrlbrm157quJ3XiSw0p7BLliM",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Redline",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Redline (Well-Worn)",
        id: "360695297",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPrxN7LEmyVQ7MEpiLuSrYmnjQO3-UdsZGHyd4_Bd1RvNQ7T_FDrw-_ng5Pu75iY1zI97bhLsvQz",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Redline",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Safari Mesh (Battle-Scarred)",
        id: "2170083429",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zFdC5K08i3mr-DkvbiKvWJlDgCvJEl3eqYpoj32gy1-UtkMGuldYfHelBtZFHZrgW4xea-jZa7ot2XnpQIiP3B",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Industrial Grade",
        skin: "Safari Mesh",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Safari Mesh (Factory New)",
        id: "310858406",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zFdC5K08i3mr-HnvD8J_WBxTwD6ZB12b7Hodumig23rUY5YTymJ4TBcFA7NVvW-FW5l-zr1JXtot2XnkNBBWuK",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Industrial Grade",
        skin: "Safari Mesh",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Safari Mesh (Field-Tested)",
        id: "1213556706",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zFdC5K08i3mr-GkvP9JrafxDtV6Z1wjr2Wod-sjg228hZvam6lcIPHcwNrYFCF-AW4lLzvgZG5tYOJlyX4zEyDKA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Industrial Grade",
        skin: "Safari Mesh",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Safari Mesh (Minimal Wear)",
        id: "310779091",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zFdC5K08i3mr-HnvD8J_WBxTwD6ZB12b7Hodumig23rUY5YTymJ4TBcFA7NVvW-FW5l-zr1JXtot2XnkNBBWuK",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Industrial Grade",
        skin: "Safari Mesh",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Safari Mesh (Well-Worn)",
        id: "310781433",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zFdC5K08i3mr-GkvP9JrafxDtV6Z1wjr2Wod-sjg228hZvam6lcIPHcwNrYFCF-AW4lLzvgZG5tYOJlyX4zEyDKA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Industrial Grade",
        skin: "Safari Mesh",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Safety Net (Battle-Scarred)",
        id: "3035673184",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszFdC5K08-3koWfjvjmMrXWk1RZ7cRnk6eRoo6m2Qzi_kdkZmz0J4OXdVc2NwuG-lDslL3thMK5uJnOnSdq6Shz-z-DyDiL63VN",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Safety Net",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Safety Net (Factory New)",
        id: "3037935709",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszFdC5K08-3koWfjvjmMrXWk1Rd4cJ5nqfHoYnw3gy2qEA-MT36I4TBJ1I4ZA2D-Vfsx-jtgJ-9tZSbziQy7HIl-z-DyBfVofz8",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Safety Net",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Safety Net (Field-Tested)",
        id: "3035691331",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszFdC5K08-3koWfjvjmMrXWk1Rc7cF4n-SPp9mjjACy_UFoNmH7dY-VcgE4YV2FqVa5lb28hJ_puMufnSBkuihz7GGdwUJH4VElPg",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Safety Net",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Safety Net (Minimal Wear)",
        id: "3035597843",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszFdC5K08-3koWfjvjmMrXWk1Rd4cJ5nqfHoYnw3gy2qEA-MT36I4TBJ1I4ZA2D-Vfsx-jtgJ-9tZSbziQy7HIl-z-DyBfVofz8",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Safety Net",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Safety Net (Well-Worn)",
        id: "3035709161",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszFdC5K08-3koWfjvjmMrXWk1Rc7cF4n-SPp9mjjACy_UFoNmH7dY-VcgE4YV2FqVa5lb28hJ_puMufnSBkuihz7GGdwUJH4VElPg",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Safety Net",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Slate (Battle-Scarred)",
        id: "4420561931",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08ykm4aOhOT9PLXQmlRZ7cRnk6eYpYmi0AOy-0A4aj3xIdSXcQJrYFHSqFHrw7jrgpe9u5TNmiY26Cgg-z-DyBrmbvZM",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Slate",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Slate (Factory New)",
        id: "4430368577",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08ykm4aOhOT9PLXQmlRd4cJ5nqfFpdXx3gbnr0M9ZGv2d4CWJw5vYlHQ_we4x7y91JK97szLnCZms3Uq-z-DyJQpVI_m",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Slate",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Slate (Field-Tested)",
        id: "4428757682",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08ykm4aOhOT9PLXQmlRc7cF4n-SP8dyhiwK1_xU4ajygIdSdJgVoMlzRrFTqlea5hpK66ZvNmnI3vHUk4WGdwUJBbIpZ4g",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Slate",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Slate (Minimal Wear)",
        id: "4428757075",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08ykm4aOhOT9PLXQmlRd4cJ5nqfFpdXx3gbnr0M9ZGv2d4CWJw5vYlHQ_we4x7y91JK97szLnCZms3Uq-z-DyJQpVI_m",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Slate",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | The Empress (Battle-Scarred)",
        id: "2626823523",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09m7hJKOhOTLO77QgHIfv5Mi3ryRrYn33wPgqRJpMjz6ddSdegU2N1jT_gO5yOnt1sS675_Py2wj5HcE0NnU0g",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "The Empress",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | The Empress (Factory New)",
        id: "2605508480",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09m7hJKOhOTLP7LWnn8f7p0gjrnDpdvxi1Xn80JqYGygLI_DdQJsMgyC_AO4xb_p0ce66ZXImmwj5Hei5N5mVw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "The Empress",
        condition: "Factory New"
    },
    {
        name: "AK-47 | The Empress (Field-Tested)",
        id: "2532053313",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09m7hJKOhOTLPr7Vn35cppMh2L2VrN-h2geyqhc-MD3xJYecIANrMwvZ8wK8wr3nhJC6vJ2dy3B9-n51Yx1fd-M",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "The Empress",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | The Empress (Minimal Wear)",
        id: "2588384820",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09m7hJKOhOTLP7LWnn8f7p0gjrnDpdvxi1Xn80JqYGygLI_DdQJsMgyC_AO4xb_p0ce66ZXImmwj5Hei5N5mVw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "The Empress",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | The Empress (Well-Worn)",
        id: "2556069303",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09m7hJKOhOTLPr7Vn35cppMh2L2VrN-h2geyqhc-MD3xJYecIANrMwvZ8wK8wr3nhJC6vJ2dy3B9-n51Yx1fd-M",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "The Empress",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Uncharted (Battle-Scarred)",
        id: "3213640145",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092sgIWIqP_xMq3I2D4Eup112--WrY6m21a28hU_ZWylLNSRIAdqZ1yBq1G3x-7q0J7ovcvXiSw08zcnSpY",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Uncharted",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Uncharted (Factory New)",
        id: "3222919392",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092sgIWIqPv9NLPF2DgHsMEo2uvAoo722AW1qkZqZ2H6I4-XIw43Z1qErFS9xe3thp7vuc7XiSw0BOl_x_w",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Uncharted",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Uncharted (Field-Tested)",
        id: "3213636904",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092sgIWIqPrxN7LEmyUI6ZAm3ujCpNymjFWx-0RtNjzzctWVIQdqYg7X81nok7rp0JbpuJ7M1zI97ZAMLLaU",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Uncharted",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Uncharted (Minimal Wear)",
        id: "3213414594",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092sgIWIqPv9NLPF2DgHsMEo2uvAoo722AW1qkZqZ2H6I4-XIw43Z1qErFS9xe3thp7vuc7XiSw0BOl_x_w",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Uncharted",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Uncharted (Well-Worn)",
        id: "3220871219",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092sgIWIqPrxN7LEmyUI6ZAm3ujCpNymjFWx-0RtNjzzctWVIQdqYg7X81nok7rp0JbpuJ7M1zI97ZAMLLaU",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Uncharted",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Vulcan (Battle-Scarred)",
        id: "469978193",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV086jloKOhcj8NrrHjyVQ6cAji7rEo9v2jlKw-RdoN2r6LY-ddQ4-aQzV8wS7lO7o0ZXp6s_B1zI97ecvvlG_",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Vulcan",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Vulcan (Factory New)",
        id: "470033831",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV086jloKOhcj4OrzZgiUEsJYnibqZ8d-l2wO1_hJtNWDzctDBIQ5taAzQqFi6wujo1se06cud1zI97ZAmS4pT",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Vulcan",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Vulcan (Field-Tested)",
        id: "2044814561",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV086jloKOhcj5Nr_Yg2YfvZcg0rmXrI2n31ex8ks9Zjz2JIKdcVA4ZArRqVm-wLzn1sC8uJnMwWwj5HcoJjKuZA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Vulcan",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Vulcan (Minimal Wear)",
        id: "1644507139",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV086jloKOhcj4OrzZgiUEsJYnibqZ8d-l2wO1_hJtNWDzctDBIQ5taAzQqFi6wujo1se06cud1zI97ZAmS4pT",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Vulcan",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Vulcan (Well-Worn)",
        id: "2066856235",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV086jloKOhcj5Nr_Yg2YfvZcg0rmXrI2n31ex8ks9Zjz2JIKdcVA4ZArRqVm-wLzn1sC8uJnMwWwj5HcoJjKuZA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Vulcan",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Wasteland Rebel (Battle-Scarred)",
        id: "667946947",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszcYzRA-cizq4GAw6DLO77QgHIfusEnjrjAot-jiwLkrhZqYG2mcYWSIQ8_ZV7V-Vm_kOe6g8PtvszMz2wj5HeU24PEGQ",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Wasteland Rebel",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Wasteland Rebel (Factory New)",
        id: "825812686",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszcYzRA-cizq4GAw6DLP7LWnn8f7pVyie_E8I2tiQDn-RJkYTqlINDHdVA-ZVnRq1a8xbq915K_uJjAmGwj5HcdAgaXHA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Wasteland Rebel",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Wasteland Rebel (Field-Tested)",
        id: "2413272879",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszcYzRA-cizq4GAw6DLPr7Vn35cppAlib-S8dumigTm8hJkMmn1JY7Hdg5rM1uD-FW4kunuhp-87ZXOzHR9-n51D2UtsBM",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Wasteland Rebel",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Wasteland Rebel (Minimal Wear)",
        id: "638244432",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszcYzRA-cizq4GAw6DLP7LWnn8f7pVyie_E8I2tiQDn-RJkYTqlINDHdVA-ZVnRq1a8xbq915K_uJjAmGwj5HcdAgaXHA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Wasteland Rebel",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Wasteland Rebel (Well-Worn)",
        id: "638247272",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszcYzRA-cizq4GAw6DLPr7Vn35cppAlib-S8dumigTm8hJkMmn1JY7Hdg5rM1uD-FW4kunuhp-87ZXOzHR9-n51D2UtsBM",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Wasteland Rebel",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | Wild Lotus (Battle-Scarred)",
        id: "3606295259",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJL_9C3moS0kfv7IbrdqWNU6dNoxLuRpo-j3QzhrUZkNzz0cdfHJgVqZFHV-ALvwubsh5Ht6p3Km3NivyQ8pSGKBUJG_Bs",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Wild Lotus",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | Wild Lotus (Factory New)",
        id: "3610337028",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJL_9C3moS0kfv7IbrdqWdY781lxLiSpd_w3wKw-xJrZDihJYCRIwI4MF-BqAC7kLzu0cXt6pyYmic2vHI8pSGKyuyQkBc",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Wild Lotus",
        condition: "Factory New"
    },
    {
        name: "AK-47 | Wild Lotus (Field-Tested)",
        id: "3608085430",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJL_9C3moS0kfv7IbrdqWZU7Mxkh6eXpY2siwznr0BqNj_yIoPHdlQ7NFiG-1LtwLq6h5HpvZSaziRg6Ccg-z-DyBDJe5cV",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Wild Lotus",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | Wild Lotus (Minimal Wear)",
        id: "3608087714",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJL_9C3moS0kfv7IbrdqWdY781lxLiSpd_w3wKw-xJrZDihJYCRIwI4MF-BqAC7kLzu0cXt6pyYmic2vHI8pSGKyuyQkBc",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Wild Lotus",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | Wild Lotus (Well-Worn)",
        id: "3608348050",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJL_9C3moS0kfv7IbrdqWZU7Mxkh6eXpY2siwznr0BqNj_yIoPHdlQ7NFiG-1LtwLq6h5HpvZSaziRg6Ccg-z-DyBDJe5cV",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Wild Lotus",
        condition: "Well-Worn"
    },
    {
        name: "AK-47 | X-Ray (Battle-Scarred)",
        id: "4145213923",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJa_t2vq4iOluHtfe6HlGgI6cdzi72X8Imk3g2wrRY4YD-gLNOXJw43Z1nQ-wK2wLrq0MWi_MOeeGSsWCc",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "X-Ray",
        condition: "Battle-Scarred"
    },
    {
        name: "AK-47 | X-Ray (Factory New)",
        id: "4149154894",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJa_t2vq4yCkP_gfbqAwDkAvcdz3r6Q8Y320Fe3-UZrMGjwcNTGcgVrY1zV-1XvxrjvhJ6i_MOeRx8zwDQ",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "X-Ray",
        condition: "Factory New"
    },
    {
        name: "AK-47 | X-Ray (Field-Tested)",
        id: "4115219447",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJa_t2vq42Ok_7hPvXQxmoGvMQj2ryX9oqi3wDl8ktuYmj2J9CSegA7aVuErlC6xObq1sS_ot2XnodZA39N",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "X-Ray",
        condition: "Field-Tested"
    },
    {
        name: "AK-47 | X-Ray (Minimal Wear)",
        id: "4115300495",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJa_t2vq4yCkP_gfbqAwDkAvcdz3r6Q8Y320Fe3-UZrMGjwcNTGcgVrY1zV-1XvxrjvhJ6i_MOeRx8zwDQ",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "X-Ray",
        condition: "Minimal Wear"
    },
    {
        name: "AK-47 | X-Ray (Well-Worn)",
        id: "4141827845",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJa_t2vq42Ok_7hPvXQxmoGvMQj2ryX9oqi3wDl8ktuYmj2J9CSegA7aVuErlC6xObq1sS_ot2XnodZA39N",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "X-Ray",
        condition: "Well-Worn"
    },
    {
        name: "Souvenir AK-47 | Black Laminate (Battle-Scarred)",
        id: "3491367407",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqP_xMq3I2GhTupQpi7DCrY2m3AzkrkZrZWz3cdCRcQBraQvX_lPtxOjugJO07svXiSw0Sdo_N6Y",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Black Laminate",
        condition: "Battle-Scarred"
    },
    {
        name: "Souvenir AK-47 | Black Laminate (Factory New)",
        id: "3514025064",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqPv9NLPF2GgEuJFyi-uTotT03A3h_hZlYWv2IdPAcAY8Y1vU-gPrw7rvjJ6-7ZnXiSw034A6uhk",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Black Laminate",
        condition: "Factory New"
    },
    {
        name: "Souvenir AK-47 | Black Laminate (Field-Tested)",
        id: "3490146195",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqPrxN7LEmyUDsJIh27-YpYmmiVDm_UFuZ2vzJYPDJlRsYw2C8lC5w-fu0Je_6ZrB1zI97TOUU9Z0",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Black Laminate",
        condition: "Field-Tested"
    },
    {
        name: "Souvenir AK-47 | Black Laminate (Minimal Wear)",
        id: "3489996671",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqPv9NLPF2GgEuJFyi-uTotT03A3h_hZlYWv2IdPAcAY8Y1vU-gPrw7rvjJ6-7ZnXiSw034A6uhk",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Black Laminate",
        condition: "Minimal Wear"
    },
    {
        name: "Souvenir AK-47 | Black Laminate (Well-Worn)",
        id: "3489957292",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqPrxN7LEmyUDsJIh27-YpYmmiVDm_UFuZ2vzJYPDJlRsYw2C8lC5w-fu0Je_6ZrB1zI97TOUU9Z0",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Black Laminate",
        condition: "Well-Worn"
    },
    {
        name: "Souvenir AK-47 | Safari Mesh (Battle-Scarred)",
        id: "1388931459",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zFdC5K08i3mr-DkvbiKvWJlDgCvJEl3eqYpoj32gy1-UtkMGuldYfHelBtZFHZrgW4xea-jZa7ot2XnpQIiP3B",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Industrial Grade",
        skin: "Safari Mesh",
        condition: "Battle-Scarred"
    },
    {
        name: "Souvenir AK-47 | Safari Mesh (Factory New)",
        id: "889190410",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zFdC5K08i3mr-HnvD8J_WBxTwD6ZB12b7Hodumig23rUY5YTymJ4TBcFA7NVvW-FW5l-zr1JXtot2XnkNBBWuK",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Industrial Grade",
        skin: "Safari Mesh",
        condition: "Factory New"
    },
    {
        name: "Souvenir AK-47 | Safari Mesh (Field-Tested)",
        id: "861244945",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zFdC5K08i3mr-GkvP9JrafxDtV6Z1wjr2Wod-sjg228hZvam6lcIPHcwNrYFCF-AW4lLzvgZG5tYOJlyX4zEyDKA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Industrial Grade",
        skin: "Safari Mesh",
        condition: "Field-Tested"
    },
    {
        name: "Souvenir AK-47 | Safari Mesh (Minimal Wear)",
        id: "2253448949",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zFdC5K08i3mr-HnvD8J_WBxTwD6ZB12b7Hodumig23rUY5YTymJ4TBcFA7NVvW-FW5l-zr1JXtot2XnkNBBWuK",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Industrial Grade",
        skin: "Safari Mesh",
        condition: "Minimal Wear"
    },
    {
        name: "Souvenir AK-47 | Safari Mesh (Well-Worn)",
        id: "1365363749",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhzw8zFdC5K08i3mr-GkvP9JrafxDtV6Z1wjr2Wod-sjg228hZvam6lcIPHcwNrYFCF-AW4lLzvgZG5tYOJlyX4zEyDKA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Industrial Grade",
        skin: "Safari Mesh",
        condition: "Well-Worn"
    },
    {
        name: "Souvenir AK-47 | Safety Net (Battle-Scarred)",
        id: "3031675232",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszFdC5K08-3koWfjvjmMrXWk1RZ7cRnk6eRoo6m2Qzi_kdkZmz0J4OXdVc2NwuG-lDslL3thMK5uJnOnSdq6Shz-z-DyDiL63VN",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Safety Net",
        condition: "Battle-Scarred"
    },
    {
        name: "Souvenir AK-47 | Safety Net (Factory New)",
        id: "3021424733",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszFdC5K08-3koWfjvjmMrXWk1Rd4cJ5nqfHoYnw3gy2qEA-MT36I4TBJ1I4ZA2D-Vfsx-jtgJ-9tZSbziQy7HIl-z-DyBfVofz8",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Safety Net",
        condition: "Factory New"
    },
    {
        name: "Souvenir AK-47 | Safety Net (Field-Tested)",
        id: "3014110984",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszFdC5K08-3koWfjvjmMrXWk1Rc7cF4n-SPp9mjjACy_UFoNmH7dY-VcgE4YV2FqVa5lb28hJ_puMufnSBkuihz7GGdwUJH4VElPg",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Safety Net",
        condition: "Field-Tested"
    },
    {
        name: "Souvenir AK-47 | Safety Net (Minimal Wear)",
        id: "3017003413",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszFdC5K08-3koWfjvjmMrXWk1Rd4cJ5nqfHoYnw3gy2qEA-MT36I4TBJ1I4ZA2D-Vfsx-jtgJ-9tZSbziQy7HIl-z-DyBfVofz8",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Safety Net",
        condition: "Minimal Wear"
    },
    {
        name: "Souvenir AK-47 | Safety Net (Well-Worn)",
        id: "3017720076",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszFdC5K08-3koWfjvjmMrXWk1Rc7cF4n-SPp9mjjACy_UFoNmH7dY-VcgE4YV2FqVa5lb28hJ_puMufnSBkuihz7GGdwUJH4VElPg",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Safety Net",
        condition: "Well-Worn"
    },
    {
        name: "StatTrak™ AK-47 | Aquamarine Revenge (Battle-Scarred)",
        id: "1014731009",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5gZKKkPLLMrfFqWNU6dNoxL3H94qm3Ffm_RE6amn2ctWXdlI2ZwqB-FG_w-7s0ZK-7cjLzyE37HI8pSGKrIDGOAI",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Aquamarine Revenge",
        condition: "Battle-Scarred"
    },
    {
        name: "StatTrak™ AK-47 | Aquamarine Revenge (Factory New)",
        id: "2326441409",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5gZKKkPLLMrfFqWdY781lxLuW8Njw31Dn8xc_YTqmJ4DDJFM2ZwqE_ATtx-u7g8C5vpjOzHM263E8pSGKJ1XuG9M",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Aquamarine Revenge",
        condition: "Factory New"
    },
    {
        name: "StatTrak™ AK-47 | Aquamarine Revenge (Field-Tested)",
        id: "1012223386",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5gZKKkPLLMrfFqWZU7Mxkh6eU896n0FXk-RJsNzv3cI-WJAA3YFDTqFa2l-u6jJW4uJqdyCBluyEm-z-DyCua9lLK",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Aquamarine Revenge",
        condition: "Field-Tested"
    },
    {
        name: "StatTrak™ AK-47 | Aquamarine Revenge (Minimal Wear)",
        id: "2032651098",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5gZKKkPLLMrfFqWdY781lxLuW8Njw31Dn8xc_YTqmJ4DDJFM2ZwqE_ATtx-u7g8C5vpjOzHM263E8pSGKJ1XuG9M",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Aquamarine Revenge",
        condition: "Minimal Wear"
    },
    {
        name: "StatTrak™ AK-47 | Aquamarine Revenge (Well-Worn)",
        id: "2402220755",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5gZKKkPLLMrfFqWZU7Mxkh6eU896n0FXk-RJsNzv3cI-WJAA3YFDTqFa2l-u6jJW4uJqdyCBluyEm-z-DyCua9lLK",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Aquamarine Revenge",
        condition: "Well-Worn"
    },
    {
        name: "StatTrak™ AK-47 | Asiimov (Battle-Scarred)",
        id: "3116031318",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092lnYmGmOHLO77QgHIf6pwpiO-RrIms2AC1-0NkZGihItDBJFVqZgrS_1TswOjn0Z-1vZjMyGwj5HeH24gOlg",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Asiimov",
        condition: "Battle-Scarred"
    },
    {
        name: "StatTrak™ AK-47 | Asiimov (Factory New)",
        id: "3116162897",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092lnYmGmOHLP7LWnn8fvpMkjOqS99Smiwzk_0VvamH0LIHEdwFqYw2G_QC3lefsjZS4uJXLyWwj5HclxVTx0A",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Asiimov",
        condition: "Factory New"
    },
    {
        name: "StatTrak™ AK-47 | Asiimov (Field-Tested)",
        id: "3107996675",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092lnYmGmOHLPr7Vn35cppQiiOuQpoml3wW18xdkNTjxd9CQdwM_ZlrT-lW_kLzu0560vp-azXJ9-n51Q5-Fea0",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Asiimov",
        condition: "Field-Tested"
    },
    {
        name: "StatTrak™ AK-47 | Asiimov (Minimal Wear)",
        id: "3114410098",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092lnYmGmOHLP7LWnn8fvpMkjOqS99Smiwzk_0VvamH0LIHEdwFqYw2G_QC3lefsjZS4uJXLyWwj5HclxVTx0A",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Asiimov",
        condition: "Minimal Wear"
    },
    {
        name: "StatTrak™ AK-47 | Asiimov (Well-Worn)",
        id: "3116432236",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092lnYmGmOHLPr7Vn35cppQiiOuQpoml3wW18xdkNTjxd9CQdwM_ZlrT-lW_kLzu0560vp-azXJ9-n51Q5-Fea0",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Asiimov",
        condition: "Well-Worn"
    },
    {
        name: "StatTrak™ AK-47 | Bloodsport (Factory New)",
        id: "2221404942",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV0966m4-PhOf7Ia_ummJW4NE_3rnHpdujjgK28kE5Y2Gid9WWdQ44YVHS-VS9wr--jJG6tJrAzCBh6D5iuyjdE47G3Q",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Bloodsport",
        condition: "Factory New"
    },
    {
        name: "StatTrak™ AK-47 | Bloodsport (Field-Tested)",
        id: "2221186850",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV0966m4-PhOf7Ia_um25V4dB8xO3Hpdn22lWxqUc9Zmr0J9XBIw89M1GGqFC8ybzvgMLvvJ6azSE1viM8pSGK5KY2J5A",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Bloodsport",
        condition: "Field-Tested"
    },
    {
        name: "StatTrak™ AK-47 | Bloodsport (Minimal Wear)",
        id: "2221776652",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV0966m4-PhOf7Ia_ummJW4NE_3rnHpdujjgK28kE5Y2Gid9WWdQ44YVHS-VS9wr--jJG6tJrAzCBh6D5iuyjdE47G3Q",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Bloodsport",
        condition: "Minimal Wear"
    },
    {
        name: "StatTrak™ AK-47 | Bloodsport (Well-Worn)",
        id: "2221414577",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV0966m4-PhOf7Ia_um25V4dB8xO3Hpdn22lWxqUc9Zmr0J9XBIw89M1GGqFC8ybzvgMLvvJ6azSE1viM8pSGK5KY2J5A",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Bloodsport",
        condition: "Well-Worn"
    },
    {
        name: "StatTrak™ AK-47 | Blue Laminate (Factory New)",
        id: "310824792",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KHgvLLP7LWnn8fscMpj-qUpNymjVK1_hFrMmmhJ4-Ue1c_YgrUrgS5ybvu18K6vZ-YyWwj5HdyMRX4FA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Blue Laminate",
        condition: "Factory New"
    },
    {
        name: "StatTrak™ AK-47 | Blue Laminate (Field-Tested)",
        id: "2177062662",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KHgvLLPr7Vn35cppJ02uyUrI2h3wDkrkFsZz-gLdXHIA87MFjTqFm-wevvjcC0tZrPnXp9-n51Y5J6evE",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Blue Laminate",
        condition: "Field-Tested"
    },
    {
        name: "StatTrak™ AK-47 | Blue Laminate (Minimal Wear)",
        id: "2077897121",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KHgvLLP7LWnn8fscMpj-qUpNymjVK1_hFrMmmhJ4-Ue1c_YgrUrgS5ybvu18K6vZ-YyWwj5HdyMRX4FA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Blue Laminate",
        condition: "Minimal Wear"
    },
    {
        name: "StatTrak™ AK-47 | Blue Laminate (Well-Worn)",
        id: "313917069",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KHgvLLPr7Vn35cppJ02uyUrI2h3wDkrkFsZz-gLdXHIA87MFjTqFm-wevvjcC0tZrPnXp9-n51Y5J6evE",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Blue Laminate",
        condition: "Well-Worn"
    },
    {
        name: "StatTrak™ AK-47 | Cartel (Battle-Scarred)",
        id: "2483261471",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszJemkV09-3hpSOm8j8NrrHjyUB7sF33ujAptWh3w3k8xc6YW-iJYOVJwI8Zl3R-FC9wum9gZbtvcnI1zI97fGb_ofx",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Cartel",
        condition: "Battle-Scarred"
    },
    {
        name: "StatTrak™ AK-47 | Cartel (Factory New)",
        id: "720733465",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszJemkV09-3hpSOm8j4OrzZgiUD7ZJzj7DHoY-iilC1-ENoNWuiI9WWdQI8Z1iE81Tvl7i81J-_6p2b1zI97XPwFCE_",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Cartel",
        condition: "Factory New"
    },
    {
        name: "StatTrak™ AK-47 | Cartel (Field-Tested)",
        id: "720349352",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszJemkV09-3hpSOm8j5Nr_Yg2Yf7ccnjOyVp92liwDg-BVoa236I9SWJgM3YV3TrFm3l-q61pS_7c7KyGwj5HcGMgDZeg",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Cartel",
        condition: "Field-Tested"
    },
    {
        name: "StatTrak™ AK-47 | Cartel (Minimal Wear)",
        id: "720379307",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszJemkV09-3hpSOm8j4OrzZgiUD7ZJzj7DHoY-iilC1-ENoNWuiI9WWdQI8Z1iE81Tvl7i81J-_6p2b1zI97XPwFCE_",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Cartel",
        condition: "Minimal Wear"
    },
    {
        name: "StatTrak™ AK-47 | Cartel (Well-Worn)",
        id: "1678473552",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszJemkV09-3hpSOm8j5Nr_Yg2Yf7ccnjOyVp92liwDg-BVoa236I9SWJgM3YV3TrFm3l-q61pS_7c7KyGwj5HcGMgDZeg",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Cartel",
        condition: "Well-Worn"
    },
    {
        name: "StatTrak™ AK-47 | Case Hardened (Battle-Scarred)",
        id: "483236866",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO-kYGdjrmjYuvSwDIAvpAnib3C9o_3jFDsr0JpYWzyJ4eWIA48NQmB_Fm2lbzsm9bi66WZ81pV",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Case Hardened",
        condition: "Battle-Scarred"
    },
    {
        name: "StatTrak™ AK-47 | Case Hardened (Factory New)",
        id: "311720671",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO6nYeDg7mtYbiJkjoDvcAlj7yVotmtjAfjrkpoZW36IoaWclM3MFnY8lK9k-vnm9bi67lSw9Es",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Case Hardened",
        condition: "Factory New"
    },
    {
        name: "StatTrak™ AK-47 | Case Hardened (Field-Tested)",
        id: "2088763637",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO7kYSCgvq6Yu-EwzsIuZIj3uiY99WmiwGx_kc9Zjr6JYHBIwM5MFHX-Fi9w-u-1Ij84soNG54bQA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Case Hardened",
        condition: "Field-Tested"
    },
    {
        name: "StatTrak™ AK-47 | Case Hardened (Minimal Wear)",
        id: "314832690",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO6nYeDg7mtYbiJkjoDvcAlj7yVotmtjAfjrkpoZW36IoaWclM3MFnY8lK9k-vnm9bi67lSw9Es",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Case Hardened",
        condition: "Minimal Wear"
    },
    {
        name: "StatTrak™ AK-47 | Case Hardened (Well-Worn)",
        id: "1530169779",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO7kYSCgvq6Yu-EwzsIuZIj3uiY99WmiwGx_kc9Zjr6JYHBIwM5MFHX-Fi9w-u-1Ij84soNG54bQA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Case Hardened",
        condition: "Well-Worn"
    },
    {
        name: "StatTrak™ AK-47 | Elite Build (Battle-Scarred)",
        id: "2178551132",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09G3h5SOhe7LO77QgHIf7pJ0iLGS94_2jAOx_BdvZGr2I9eVegVvNV3Q_gW8lbrsgZC875TPnWwj5HcWwWbOUQ",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Elite Build",
        condition: "Battle-Scarred"
    },
    {
        name: "StatTrak™ AK-47 | Elite Build (Factory New)",
        id: "1233111532",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09G3h5SOhe7LP7LWnn8fvJYh3-qR942higTmqBZpYGild4adIQQ5ZA6B_AC3lebo0ce-78vOnGwj5HeAJ9sV6g",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Elite Build",
        condition: "Factory New"
    },
    {
        name: "StatTrak™ AK-47 | Elite Build (Field-Tested)",
        id: "2471008987",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09G3h5SOhe7LPr7Vn35cpsEl0-2Xrdii3APt-RI4ZG71IdOXelJoZVDX_li7kOu-1MW6uZ_JyHV9-n51hRUaMfs",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Elite Build",
        condition: "Field-Tested"
    },
    {
        name: "StatTrak™ AK-47 | Elite Build (Minimal Wear)",
        id: "1107761540",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09G3h5SOhe7LP7LWnn8fvJYh3-qR942higTmqBZpYGild4adIQQ5ZA6B_AC3lebo0ce-78vOnGwj5HeAJ9sV6g",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Elite Build",
        condition: "Minimal Wear"
    },
    {
        name: "StatTrak™ AK-47 | Elite Build (Well-Worn)",
        id: "937424454",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09G3h5SOhe7LPr7Vn35cpsEl0-2Xrdii3APt-RI4ZG71IdOXelJoZVDX_li7kOu-1MW6uZ_JyHV9-n51hRUaMfs",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Elite Build",
        condition: "Well-Worn"
    },
    {
        name: "StatTrak™ AK-47 | Fire Serpent (Battle-Scarred)",
        id: "311596001",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszOeC9H_9mkhIWFg8j1OO-GqWlD6dN-teHE9JrsxgDl_BBoYmD6JIbHJwdsYFiDr1K7kLvpjZPvu8nAmHtqvSkm5i6IyxKpwUYbkchkGw4",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Fire Serpent",
        condition: "Battle-Scarred"
    },
    {
        name: "StatTrak™ AK-47 | Fire Serpent (Factory New)",
        id: "315577417",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszOeC9H_9mkhIWFg8j1OO-GqWlD6dN-teXI8oThxg3n8kM5ZD-nJI-UJ1c2MFjU-VXolezugZXpvMyan3I3v3Qjty2OlhKpwUYbndZ_4hw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Fire Serpent",
        condition: "Factory New"
    },
    {
        name: "StatTrak™ AK-47 | Fire Serpent (Field-Tested)",
        id: "311113186",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszOeC9H_9mkhIWFg8j1OO-GqWlD6dN-teTE8YXghRrkqRVqMGzzIYeTIAVqaQuErlbvlb-80JfuusvJmHFr6SRxsXzfm0fkn1gSOc02RC4r",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Fire Serpent",
        condition: "Field-Tested"
    },
    {
        name: "StatTrak™ AK-47 | Fire Serpent (Minimal Wear)",
        id: "398365088",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszOeC9H_9mkhIWFg8j1OO-GqWlD6dN-teXI8oThxg3n8kM5ZD-nJI-UJ1c2MFjU-VXolezugZXpvMyan3I3v3Qjty2OlhKpwUYbndZ_4hw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Fire Serpent",
        condition: "Minimal Wear"
    },
    {
        name: "StatTrak™ AK-47 | Fire Serpent (Well-Worn)",
        id: "2157474303",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszOeC9H_9mkhIWFg8j1OO-GqWlD6dN-teTE8YXghRrkqRVqMGzzIYeTIAVqaQuErlbvlb-80JfuusvJmHFr6SRxsXzfm0fkn1gSOc02RC4r",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Fire Serpent",
        condition: "Well-Worn"
    },
    {
        name: "StatTrak™ AK-47 | Frontside Misty (Battle-Scarred)",
        id: "2180485099",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08u_mpSOhcjnI7TDglRZ7cRnk6eYp4-gig2w_Uc9N26mIoCXdg5sMg2G_1O8le_nhp-6753AyHYxvSAn-z-DyG61se40",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Frontside Misty",
        condition: "Battle-Scarred"
    },
    {
        name: "StatTrak™ AK-47 | Frontside Misty (Factory New)",
        id: "1974720714",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08u_mpSOhcjnI7TDglRd4cJ5nqeSrY_x2VDlqBZrZTr2LIfAe1RvYgzW_Va6kL3u0JG8vJ7NyyQwunEj-z-DyIN9IvW2",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Frontside Misty",
        condition: "Factory New"
    },
    {
        name: "StatTrak™ AK-47 | Frontside Misty (Field-Tested)",
        id: "1310011678",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08u_mpSOhcjnI7TDglRc7cF4n-SPpI-iigLg80ZvZzryd4_GI1Q6Yg3VqFe4w-y90JLo753NzXtmsnEl4mGdwUIuRPhSEw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Frontside Misty",
        condition: "Field-Tested"
    },
    {
        name: "StatTrak™ AK-47 | Frontside Misty (Minimal Wear)",
        id: "1312321048",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08u_mpSOhcjnI7TDglRd4cJ5nqeSrY_x2VDlqBZrZTr2LIfAe1RvYgzW_Va6kL3u0JG8vJ7NyyQwunEj-z-DyIN9IvW2",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Frontside Misty",
        condition: "Minimal Wear"
    },
    {
        name: "StatTrak™ AK-47 | Frontside Misty (Well-Worn)",
        id: "1312385540",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08u_mpSOhcjnI7TDglRc7cF4n-SPpI-iigLg80ZvZzryd4_GI1Q6Yg3VqFe4w-y90JLo753NzXtmsnEl4mGdwUIuRPhSEw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Frontside Misty",
        condition: "Well-Worn"
    },
    {
        name: "StatTrak™ AK-47 | Fuel Injector (Battle-Scarred)",
        id: "1827414481",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08-jhIWZlP_1IbzUklRZ7cRnk6eSp92h2gGwrkRvZGymI4aVcwY5ZVuFrAS5xuy605e1v5_PznEyvyBx-z-DyHxgUuDa",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Fuel Injector",
        condition: "Battle-Scarred"
    },
    {
        name: "StatTrak™ AK-47 | Fuel Injector (Factory New)",
        id: "1573385441",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08-jhIWZlP_1IbzUklRd4cJ5nqeZ9Nzx3Qex80c-ZGn3LYWTdFc9NFuEqAO8xLrtjMC4u56dznQ36XVw-z-DyK64IMQ5",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Fuel Injector",
        condition: "Factory New"
    },
    {
        name: "StatTrak™ AK-47 | Fuel Injector (Field-Tested)",
        id: "2091260127",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08-jhIWZlP_1IbzUklRc7cF4n-SPpIr33gS1rkJqYGD7J4GQcQY5aFCG-lHrlO650JLv6ZzMziA2vXMgtmGdwULg8tCd0w",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Fuel Injector",
        condition: "Field-Tested"
    },
    {
        name: "StatTrak™ AK-47 | Fuel Injector (Minimal Wear)",
        id: "2099118246",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08-jhIWZlP_1IbzUklRd4cJ5nqeZ9Nzx3Qex80c-ZGn3LYWTdFc9NFuEqAO8xLrtjMC4u56dznQ36XVw-z-DyK64IMQ5",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Fuel Injector",
        condition: "Minimal Wear"
    },
    {
        name: "StatTrak™ AK-47 | Fuel Injector (Well-Worn)",
        id: "1563052380",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08-jhIWZlP_1IbzUklRc7cF4n-SPpIr33gS1rkJqYGD7J4GQcQY5aFCG-lHrlO650JLv6ZzMziA2vXMgtmGdwULg8tCd0w",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Fuel Injector",
        condition: "Well-Worn"
    },
    {
        name: "StatTrak™ AK-47 | Jaguar (Battle-Scarred)",
        id: "528676209",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYcDNW5Nmkq4GAw6DLO77QgHIf6ZQmju_C9NT00QCw_kpkZDrwdtWWIVA3YA2G8li2kLvv1pG475vMwWwj5He0r7zIMQ",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Jaguar",
        condition: "Battle-Scarred"
    },
    {
        name: "StatTrak™ AK-47 | Jaguar (Factory New)",
        id: "534136058",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYcDNW5Nmkq4GAw6DLP7LWnn8fvscmibGTpdSmigGyqRFrYm_wJdfBdQ84YAmD-1S6wrru08W-7ZianWwj5HfSt_Eogg",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Jaguar",
        condition: "Factory New"
    },
    {
        name: "StatTrak™ AK-47 | Jaguar (Field-Tested)",
        id: "2074417442",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYcDNW5Nmkq4GAw6DLPr7Vn35cpschiOiTpNvx2QzmqUJkZDqnJoWRcgQ7NQvQ_FnsxunugMfv6MucyiB9-n51SuyeNcE",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Jaguar",
        condition: "Field-Tested"
    },
    {
        name: "StatTrak™ AK-47 | Jaguar (Minimal Wear)",
        id: "552761195",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYcDNW5Nmkq4GAw6DLP7LWnn8fvscmibGTpdSmigGyqRFrYm_wJdfBdQ84YAmD-1S6wrru08W-7ZianWwj5HfSt_Eogg",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Jaguar",
        condition: "Minimal Wear"
    },
    {
        name: "StatTrak™ AK-47 | Jaguar (Well-Worn)",
        id: "1272269815",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYcDNW5Nmkq4GAw6DLPr7Vn35cpschiOiTpNvx2QzmqUJkZDqnJoWRcgQ7NQvQ_FnsxunugMfv6MucyiB9-n51SuyeNcE",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Jaguar",
        condition: "Well-Worn"
    },
    {
        name: "StatTrak™ AK-47 | Legion of Anubis (Battle-Scarred)",
        id: "3954951683",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924gYKChMj8NrrHjyUHuJUi3uuUrdmkjgPl-UdqYWr6LYCUdlM9MlnZ_lK-ku_shZ677c-f1zI97bR0BUMC",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Legion of Anubis",
        condition: "Battle-Scarred"
    },
    {
        name: "StatTrak™ AK-47 | Legion of Anubis (Factory New)",
        id: "3960519848",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924gYKChMj4OrzZgiUGv5wo3uuY8dr02lLn-0FsMGmgIdfEelU3Ml-G_VG9xOm7gZC87suf1zI97aiJAbeK",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Legion of Anubis",
        condition: "Factory New"
    },
    {
        name: "StatTrak™ AK-47 | Legion of Anubis (Field-Tested)",
        id: "3956656914",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924gYKChMj5Nr_Yg2YfvcQp3LHEp46i0QLs_kJsN236IYKRIQE2aQuG8ljrxe7phZ-5v8_MnWwj5HdtkEFgKg",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Legion of Anubis",
        condition: "Field-Tested"
    },
    {
        name: "StatTrak™ AK-47 | Legion of Anubis (Minimal Wear)",
        id: "3950343270",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924gYKChMj4OrzZgiUGv5wo3uuY8dr02lLn-0FsMGmgIdfEelU3Ml-G_VG9xOm7gZC87suf1zI97aiJAbeK",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Legion of Anubis",
        condition: "Minimal Wear"
    },
    {
        name: "StatTrak™ AK-47 | Legion of Anubis (Well-Worn)",
        id: "3957247931",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924gYKChMj5Nr_Yg2YfvcQp3LHEp46i0QLs_kJsN236IYKRIQE2aQuG8ljrxe7phZ-5v8_MnWwj5HdtkEFgKg",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Legion of Anubis",
        condition: "Well-Worn"
    },
    {
        name: "StatTrak™ AK-47 | Neon Revolution (Battle-Scarred)",
        id: "1938092837",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924lZKIn-7LO77QgHIfusd30-3H8NqgilGwrRBpZG7wIdDHdgc7YV3Rq1e-x-a5gp_u6ZSYmmwj5HcS3vwV9A",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Neon Revolution",
        condition: "Battle-Scarred"
    },
    {
        name: "StatTrak™ AK-47 | Neon Revolution (Factory New)",
        id: "2244221649",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924lZKIn-7LP7LWnn8fvsAo0u-R9trzi1bs-hI9NjqiJIXGdwBrNAzW8li4w7jqhcW16cvAzWwj5HdQlBgtMw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Neon Revolution",
        condition: "Factory New"
    },
    {
        name: "StatTrak™ AK-47 | Neon Revolution (Field-Tested)",
        id: "1935914046",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924lZKIn-7LPr7Vn35cppwl3OyVp9Txi1Gy_0Y9MDjyd4fGJFVsZFGG-gC5xLvo1pfouJ3Bzyd9-n51-K95osI",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Neon Revolution",
        condition: "Field-Tested"
    },
    {
        name: "StatTrak™ AK-47 | Neon Revolution (Minimal Wear)",
        id: "1937932623",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924lZKIn-7LP7LWnn8fvsAo0u-R9trzi1bs-hI9NjqiJIXGdwBrNAzW8li4w7jqhcW16cvAzWwj5HdQlBgtMw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Neon Revolution",
        condition: "Minimal Wear"
    },
    {
        name: "StatTrak™ AK-47 | Neon Revolution (Well-Worn)",
        id: "1937096156",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924lZKIn-7LPr7Vn35cppwl3OyVp9Txi1Gy_0Y9MDjyd4fGJFVsZFGG-gC5xLvo1pfouJ3Bzyd9-n51-K95osI",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Neon Revolution",
        condition: "Well-Worn"
    },
    {
        name: "StatTrak™ AK-47 | Neon Rider (Battle-Scarred)",
        id: "2966720272",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJM6dO4q5KCk_LmDLPUl31IppMkjuyWrY7zjA21qEJlMj-mJ4GTcw9oNQvRr1O3krzn0JO46szMnSR9-n51qFfzmsM",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Neon Rider",
        condition: "Battle-Scarred"
    },
    {
        name: "StatTrak™ AK-47 | Neon Rider (Factory New)",
        id: "2963980558",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJM6dO4q5KCk_LmDLfYkWNFppwj2rCQrN733QXgqEc5MGD7JYKTIAI5ZV-ErwK2krvrhZHttZrOmnp9-n51haggJHM",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Neon Rider",
        condition: "Factory New"
    },
    {
        name: "StatTrak™ AK-47 | Neon Rider (Field-Tested)",
        id: "2953889355",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJM6dO4q5KCk_LmDLbUkmJE5YshjL2W8NWn3Qy1_0FoMTryLNSQewE9MFDX8wTvlee-0MC67cuayCFnpGB8srRZP464",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Neon Rider",
        condition: "Field-Tested"
    },
    {
        name: "StatTrak™ AK-47 | Neon Rider (Minimal Wear)",
        id: "2968290637",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJM6dO4q5KCk_LmDLfYkWNFppwj2rCQrN733QXgqEc5MGD7JYKTIAI5ZV-ErwK2krvrhZHttZrOmnp9-n51haggJHM",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Neon Rider",
        condition: "Minimal Wear"
    },
    {
        name: "StatTrak™ AK-47 | Neon Rider (Well-Worn)",
        id: "3027929142",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJM6dO4q5KCk_LmDLbUkmJE5YshjL2W8NWn3Qy1_0FoMTryLNSQewE9MFDX8wTvlee-0MC67cuayCFnpGB8srRZP464",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Neon Rider",
        condition: "Well-Worn"
    },
    {
        name: "StatTrak™ AK-47 | Orbit Mk01 (Battle-Scarred)",
        id: "2318466280",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJegJB49C5mpnbxsjmNr_unm5Q_tw_iL6Tp4322gTi-UBrYGugItKTJwQ-Zg6F-gXsyLu5gZPptJzMzXFn7j5iuyhzWOiRzw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Orbit Mk01",
        condition: "Battle-Scarred"
    },
    {
        name: "StatTrak™ AK-47 | Orbit Mk01 (Factory New)",
        id: "2316785539",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJegJB49C5mpnbxsjmNr_ummJW4NE_iL-ZrYj03wLl_hFqNm71cteWdlA5Zl2F-FG-yO_r0cW4uMnMynFl6T5iuyjnxSwaOw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Orbit Mk01",
        condition: "Factory New"
    },
    {
        name: "StatTrak™ AK-47 | Orbit Mk01 (Field-Tested)",
        id: "2474928727",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJegJB49C5mpnbxsjmNr_um25V4dB8xLnH9o3w3wHmqhFrYGGlJ4fGdQQ6MgnQ_FS8lb_nhJC06MjOzyBruiE8pSGK4ZbPlSA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Orbit Mk01",
        condition: "Field-Tested"
    },
    {
        name: "StatTrak™ AK-47 | Orbit Mk01 (Minimal Wear)",
        id: "2471366179",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJegJB49C5mpnbxsjmNr_ummJW4NE_iL-ZrYj03wLl_hFqNm71cteWdlA5Zl2F-FG-yO_r0cW4uMnMynFl6T5iuyjnxSwaOw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Orbit Mk01",
        condition: "Minimal Wear"
    },
    {
        name: "StatTrak™ AK-47 | Orbit Mk01 (Well-Worn)",
        id: "2329292671",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJegJB49C5mpnbxsjmNr_um25V4dB8xLnH9o3w3wHmqhFrYGGlJ4fGdQQ6MgnQ_FS8lb_nhJC06MjOzyBruiE8pSGK4ZbPlSA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Orbit Mk01",
        condition: "Well-Worn"
    },
    {
        name: "StatTrak™ AK-47 | Phantom Disruptor (Battle-Scarred)",
        id: "3772273633",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJenAWu-OmnIGFg_j5DL_YhXlE-NF-mNbJ8I3jkRrhqUc_NW71cdXEc1A8ZgyFrgTrlezphMTouJzBmCdrsyVztHvcnxyzn1gSOdeAPgVh",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Phantom Disruptor",
        condition: "Battle-Scarred"
    },
    {
        name: "StatTrak™ AK-47 | Phantom Disruptor (Factory New)",
        id: "3771884136",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJenAWu-OmnIGFg_j5DL_YhXlE-NF-mNbN_Iv9nBq3-kc6MDyhcYeSIwJtYAnV-ljrlb3qjJHuv56dmiBq6CV2tiuMnBfln1gSOdwFZ75X",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Phantom Disruptor",
        condition: "Factory New"
    },
    {
        name: "StatTrak™ AK-47 | Phantom Disruptor (Field-Tested)",
        id: "3774009745",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJenAWu-OmnIGFg_j5DL_YhXlE-NF-mNbM8Ij8nVn6_EQ5ZWr7cdWRdwI9YAmDqwTtwezrg8W9vprNmiRk63Ih4neInBHiiAYMMLIT_kAueQ",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Phantom Disruptor",
        condition: "Field-Tested"
    },
    {
        name: "StatTrak™ AK-47 | Phantom Disruptor (Minimal Wear)",
        id: "3770686674",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJenAWu-OmnIGFg_j5DL_YhXlE-NF-mNbN_Iv9nBq3-kc6MDyhcYeSIwJtYAnV-ljrlb3qjJHuv56dmiBq6CV2tiuMnBfln1gSOdwFZ75X",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Phantom Disruptor",
        condition: "Minimal Wear"
    },
    {
        name: "StatTrak™ AK-47 | Phantom Disruptor (Well-Worn)",
        id: "3774024170",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJenAWu-OmnIGFg_j5DL_YhXlE-NF-mNbM8Ij8nVn6_EQ5ZWr7cdWRdwI9YAmDqwTtwezrg8W9vprNmiRk63Ih4neInBHiiAYMMLIT_kAueQ",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Phantom Disruptor",
        condition: "Well-Worn"
    },
    {
        name: "StatTrak™ AK-47 | Point Disarray (Battle-Scarred)",
        id: "1911852053",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08y5nY6fqPP9ILrDhGpI1810i__Yu4_w0QTtrkA-N2zyJICRegU6NAnY_1HrwLjnhcfvv8jMznBgv3J37X3D30vgTisad-g",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Point Disarray",
        condition: "Battle-Scarred"
    },
    {
        name: "StatTrak™ AK-47 | Point Disarray (Factory New)",
        id: "1848885941",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08y5nY6fqPP9ILrDhGpI18l4jeHVu4702FLiqBA4MDv6JYHEIwRsNQ3Srwe-wu_t1pO76JrPyiNlu3Qh4X7D30vg5znacIE",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Point Disarray",
        condition: "Factory New"
    },
    {
        name: "StatTrak™ AK-47 | Point Disarray (Field-Tested)",
        id: "2427129252",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08y5nY6fqPP9ILrDhGpI18h0juDU-MLx2gKy8xFqMDr2IIORcAU6MlnS_Vjtxu7rhcK-u5-cyXZqsiEg7HnUgVXp1kpd_x09",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Point Disarray",
        condition: "Field-Tested"
    },
    {
        name: "StatTrak™ AK-47 | Point Disarray (Minimal Wear)",
        id: "1878881550",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08y5nY6fqPP9ILrDhGpI18l4jeHVu4702FLiqBA4MDv6JYHEIwRsNQ3Srwe-wu_t1pO76JrPyiNlu3Qh4X7D30vg5znacIE",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Point Disarray",
        condition: "Minimal Wear"
    },
    {
        name: "StatTrak™ AK-47 | Point Disarray (Well-Worn)",
        id: "1752389133",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08y5nY6fqPP9ILrDhGpI18h0juDU-MLx2gKy8xFqMDr2IIORcAU6MlnS_Vjtxu7rhcK-u5-cyXZqsiEg7HnUgVXp1kpd_x09",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Point Disarray",
        condition: "Well-Worn"
    },
    {
        name: "StatTrak™ AK-47 | Rat Rod (Battle-Scarred)",
        id: "3608087925",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09K_loKHkuXLO77QgHIfscAojr2Up92higzk-BY-Ym_1JYaRcwY8Ml_U8wO2wurvjJW_usnIy2wj5HeLdRMtkA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Rat Rod",
        condition: "Battle-Scarred"
    },
    {
        name: "StatTrak™ AK-47 | Rat Rod (Factory New)",
        id: "3608115507",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09K_loKHkuXLP7LWnn8fucYl2rvFptWgigLm8xI9Zm_1I4SWe1NrMlzU_FW-lem5g5a_6JrMzWwj5HfI4UkLHw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Rat Rod",
        condition: "Factory New"
    },
    {
        name: "StatTrak™ AK-47 | Rat Rod (Field-Tested)",
        id: "3609196471",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09K_loKHkuXLPr7Vn35cppN3j-qYoNWn0Fey8hFoazj0ddKWewc8M1_Ur1nqw-i8gZHtuZzKmiN9-n51RnxxtpI",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Rat Rod",
        condition: "Field-Tested"
    },
    {
        name: "StatTrak™ AK-47 | Rat Rod (Minimal Wear)",
        id: "3608091420",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09K_loKHkuXLP7LWnn8fucYl2rvFptWgigLm8xI9Zm_1I4SWe1NrMlzU_FW-lem5g5a_6JrMzWwj5HfI4UkLHw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Rat Rod",
        condition: "Minimal Wear"
    },
    {
        name: "StatTrak™ AK-47 | Rat Rod (Well-Worn)",
        id: "3600933956",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09K_loKHkuXLPr7Vn35cppN3j-qYoNWn0Fey8hFoazj0ddKWewc8M1_Ur1nqw-i8gZHtuZzKmiN9-n51RnxxtpI",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Rat Rod",
        condition: "Well-Worn"
    },
    {
        name: "StatTrak™ AK-47 | Red Laminate (Battle-Scarred)",
        id: "2368451717",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4iOluHtfb6EzjsA6pQi3ruZrd723wfi_0I4amjzIoeTJAQ8aFzT-wPvx-26gpei_MOe6z3geXU",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Red Laminate",
        condition: "Battle-Scarred"
    },
    {
        name: "StatTrak™ AK-47 | Red Laminate (Factory New)",
        id: "372721885",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4yCkP_gfeqIzz0DuMAp2rGUotWj2w3m_Uc_NW72J9KVdAM-ZlrRqFXsku-5hpGi_MOeuhMPC0E",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Red Laminate",
        condition: "Factory New"
    },
    {
        name: "StatTrak™ AK-47 | Red Laminate (Field-Tested)",
        id: "310994674",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q42Ok_7hPvWBkjJU68Mkju2SpY2gjgWy80FlMmihLISdI1M5M1nXq1m3w-fvjZK8ot2XnqH-Ks6p",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Red Laminate",
        condition: "Field-Tested"
    },
    {
        name: "StatTrak™ AK-47 | Red Laminate (Minimal Wear)",
        id: "1977499582",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4yCkP_gfeqIzz0DuMAp2rGUotWj2w3m_Uc_NW72J9KVdAM-ZlrRqFXsku-5hpGi_MOeuhMPC0E",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Red Laminate",
        condition: "Minimal Wear"
    },
    {
        name: "StatTrak™ AK-47 | Red Laminate (Well-Worn)",
        id: "1145668640",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q42Ok_7hPvWBkjJU68Mkju2SpY2gjgWy80FlMmihLISdI1M5M1nXq1m3w-fvjZK8ot2XnqH-Ks6p",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Red Laminate",
        condition: "Well-Worn"
    },
    {
        name: "StatTrak™ AK-47 | Redline (Battle-Scarred)",
        id: "2466910271",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqP_xMq3I2D0B65Jy2b7FrNqgjQXn8hVvazj3J4OdIFRsY1nYrgDtxO27h8W5uZvXiSw07ljG5dE",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Redline",
        condition: "Battle-Scarred"
    },
    {
        name: "StatTrak™ AK-47 | Redline (Field-Tested)",
        id: "2087478322",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPrxN7LEmyVQ7MEpiLuSrYmnjQO3-UdsZGHyd4_Bd1RvNQ7T_FDrw-_ng5Pu75iY1zI97bhLsvQz",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Redline",
        condition: "Field-Tested"
    },
    {
        name: "StatTrak™ AK-47 | Redline (Minimal Wear)",
        id: "2021481669",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPv9NLPF2G1UsZFw373Cp96kigbgrUBuY22nLIWUcgRvN17Y8lnrlbrm157quJ3XiSw0p7BLliM",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Redline",
        condition: "Minimal Wear"
    },
    {
        name: "StatTrak™ AK-47 | Redline (Well-Worn)",
        id: "595627093",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPrxN7LEmyVQ7MEpiLuSrYmnjQO3-UdsZGHyd4_Bd1RvNQ7T_FDrw-_ng5Pu75iY1zI97bhLsvQz",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Classified",
        skin: "Redline",
        condition: "Well-Worn"
    },
    {
        name: "StatTrak™ AK-47 | Slate (Battle-Scarred)",
        id: "4419034012",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08ykm4aOhOT9PLXQmlRZ7cRnk6eYpYmi0AOy-0A4aj3xIdSXcQJrYFHSqFHrw7jrgpe9u5TNmiY26Cgg-z-DyBrmbvZM",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Slate",
        condition: "Battle-Scarred"
    },
    {
        name: "StatTrak™ AK-47 | Slate (Factory New)",
        id: "4428853771",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08ykm4aOhOT9PLXQmlRd4cJ5nqfFpdXx3gbnr0M9ZGv2d4CWJw5vYlHQ_we4x7y91JK97szLnCZms3Uq-z-DyJQpVI_m",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Slate",
        condition: "Factory New"
    },
    {
        name: "StatTrak™ AK-47 | Slate (Field-Tested)",
        id: "4428793733",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08ykm4aOhOT9PLXQmlRc7cF4n-SP8dyhiwK1_xU4ajygIdSdJgVoMlzRrFTqlea5hpK66ZvNmnI3vHUk4WGdwUJBbIpZ4g",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Slate",
        condition: "Field-Tested"
    },
    {
        name: "StatTrak™ AK-47 | Slate (Minimal Wear)",
        id: "4423017178",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08ykm4aOhOT9PLXQmlRd4cJ5nqfFpdXx3gbnr0M9ZGv2d4CWJw5vYlHQ_we4x7y91JK97szLnCZms3Uq-z-DyJQpVI_m",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Slate",
        condition: "Minimal Wear"
    },
    {
        name: "StatTrak™ AK-47 | Slate (Well-Worn)",
        id: "4435730890",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08ykm4aOhOT9PLXQmlRc7cF4n-SP8dyhiwK1_xU4ajygIdSdJgVoMlzRrFTqlea5hpK66ZvNmnI3vHUk4WGdwUJBbIpZ4g",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Restricted",
        skin: "Slate",
        condition: "Well-Worn"
    },
    {
        name: "StatTrak™ AK-47 | The Empress (Battle-Scarred)",
        id: "2551598459",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09m7hJKOhOTLO77QgHIfv5Mi3ryRrYn33wPgqRJpMjz6ddSdegU2N1jT_gO5yOnt1sS675_Py2wj5HcE0NnU0g",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "The Empress",
        condition: "Battle-Scarred"
    },
    {
        name: "StatTrak™ AK-47 | The Empress (Factory New)",
        id: "2619910107",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09m7hJKOhOTLP7LWnn8f7p0gjrnDpdvxi1Xn80JqYGygLI_DdQJsMgyC_AO4xb_p0ce66ZXImmwj5Hei5N5mVw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "The Empress",
        condition: "Factory New"
    },
    {
        name: "StatTrak™ AK-47 | The Empress (Field-Tested)",
        id: "2533314171",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09m7hJKOhOTLPr7Vn35cppMh2L2VrN-h2geyqhc-MD3xJYecIANrMwvZ8wK8wr3nhJC6vJ2dy3B9-n51Yx1fd-M",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "The Empress",
        condition: "Field-Tested"
    },
    {
        name: "StatTrak™ AK-47 | The Empress (Minimal Wear)",
        id: "2534904429",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09m7hJKOhOTLP7LWnn8f7p0gjrnDpdvxi1Xn80JqYGygLI_DdQJsMgyC_AO4xb_p0ce66ZXImmwj5Hei5N5mVw",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "The Empress",
        condition: "Minimal Wear"
    },
    {
        name: "StatTrak™ AK-47 | The Empress (Well-Worn)",
        id: "2535006092",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09m7hJKOhOTLPr7Vn35cppMh2L2VrN-h2geyqhc-MD3xJYecIANrMwvZ8wK8wr3nhJC6vJ2dy3B9-n51Yx1fd-M",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "The Empress",
        condition: "Well-Worn"
    },
    {
        name: "StatTrak™ AK-47 | Uncharted (Battle-Scarred)",
        id: "3220811030",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092sgIWIqP_xMq3I2D4Eup112--WrY6m21a28hU_ZWylLNSRIAdqZ1yBq1G3x-7q0J7ovcvXiSw08zcnSpY",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Uncharted",
        condition: "Battle-Scarred"
    },
    {
        name: "StatTrak™ AK-47 | Uncharted (Factory New)",
        id: "3221375325",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092sgIWIqPv9NLPF2DgHsMEo2uvAoo722AW1qkZqZ2H6I4-XIw43Z1qErFS9xe3thp7vuc7XiSw0BOl_x_w",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Uncharted",
        condition: "Factory New"
    },
    {
        name: "StatTrak™ AK-47 | Uncharted (Field-Tested)",
        id: "3220798075",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092sgIWIqPrxN7LEmyUI6ZAm3ujCpNymjFWx-0RtNjzzctWVIQdqYg7X81nok7rp0JbpuJ7M1zI97ZAMLLaU",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Uncharted",
        condition: "Field-Tested"
    },
    {
        name: "StatTrak™ AK-47 | Uncharted (Minimal Wear)",
        id: "3213642275",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092sgIWIqPv9NLPF2DgHsMEo2uvAoo722AW1qkZqZ2H6I4-XIw43Z1qErFS9xe3thp7vuc7XiSw0BOl_x_w",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Uncharted",
        condition: "Minimal Wear"
    },
    {
        name: "StatTrak™ AK-47 | Uncharted (Well-Worn)",
        id: "3225957470",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092sgIWIqPrxN7LEmyUI6ZAm3ujCpNymjFWx-0RtNjzzctWVIQdqYg7X81nok7rp0JbpuJ7M1zI97ZAMLLaU",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Mil-Spec Grade",
        skin: "Uncharted",
        condition: "Well-Worn"
    },
    {
        name: "StatTrak™ AK-47 | Vulcan (Battle-Scarred)",
        id: "2471102672",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV086jloKOhcj8NrrHjyVQ6cAji7rEo9v2jlKw-RdoN2r6LY-ddQ4-aQzV8wS7lO7o0ZXp6s_B1zI97ecvvlG_",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Vulcan",
        condition: "Battle-Scarred"
    },
    {
        name: "StatTrak™ AK-47 | Vulcan (Factory New)",
        id: "477211516",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV086jloKOhcj4OrzZgiUEsJYnibqZ8d-l2wO1_hJtNWDzctDBIQ5taAzQqFi6wujo1se06cud1zI97ZAmS4pT",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Vulcan",
        condition: "Factory New"
    },
    {
        name: "StatTrak™ AK-47 | Vulcan (Field-Tested)",
        id: "2177158837",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV086jloKOhcj5Nr_Yg2YfvZcg0rmXrI2n31ex8ks9Zjz2JIKdcVA4ZArRqVm-wLzn1sC8uJnMwWwj5HcoJjKuZA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Vulcan",
        condition: "Field-Tested"
    },
    {
        name: "StatTrak™ AK-47 | Vulcan (Minimal Wear)",
        id: "2094194883",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV086jloKOhcj4OrzZgiUEsJYnibqZ8d-l2wO1_hJtNWDzctDBIQ5taAzQqFi6wujo1se06cud1zI97ZAmS4pT",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Vulcan",
        condition: "Minimal Wear"
    },
    {
        name: "StatTrak™ AK-47 | Vulcan (Well-Worn)",
        id: "2185447699",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV086jloKOhcj5Nr_Yg2YfvZcg0rmXrI2n31ex8ks9Zjz2JIKdcVA4ZArRqVm-wLzn1sC8uJnMwWwj5HcoJjKuZA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Vulcan",
        condition: "Well-Worn"
    },
    {
        name: "StatTrak™ AK-47 | Wasteland Rebel (Battle-Scarred)",
        id: "1944598166",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszcYzRA-cizq4GAw6DLO77QgHIfusEnjrjAot-jiwLkrhZqYG2mcYWSIQ8_ZV7V-Vm_kOe6g8PtvszMz2wj5HeU24PEGQ",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Wasteland Rebel",
        condition: "Battle-Scarred"
    },
    {
        name: "StatTrak™ AK-47 | Wasteland Rebel (Factory New)",
        id: "638571184",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszcYzRA-cizq4GAw6DLP7LWnn8f7pVyie_E8I2tiQDn-RJkYTqlINDHdVA-ZVnRq1a8xbq915K_uJjAmGwj5HcdAgaXHA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Wasteland Rebel",
        condition: "Factory New"
    },
    {
        name: "StatTrak™ AK-47 | Wasteland Rebel (Field-Tested)",
        id: "638247616",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszcYzRA-cizq4GAw6DLPr7Vn35cppAlib-S8dumigTm8hJkMmn1JY7Hdg5rM1uD-FW4kunuhp-87ZXOzHR9-n51D2UtsBM",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Wasteland Rebel",
        condition: "Field-Tested"
    },
    {
        name: "StatTrak™ AK-47 | Wasteland Rebel (Minimal Wear)",
        id: "638264877",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszcYzRA-cizq4GAw6DLP7LWnn8f7pVyie_E8I2tiQDn-RJkYTqlINDHdVA-ZVnRq1a8xbq915K_uJjAmGwj5HcdAgaXHA",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Wasteland Rebel",
        condition: "Minimal Wear"
    },
    {
        name: "StatTrak™ AK-47 | Wasteland Rebel (Well-Worn)",
        id: "1441574441",
        URL: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszcYzRA-cizq4GAw6DLPr7Vn35cppAlib-S8dumigTm8hJkMmn1JY7Hdg5rM1uD-FW4kunuhp-87ZXOzHR9-n51D2UtsBM",
        weapon_type: "Rifle",
        sub_type: "AK-47",
        rarity: "Covert",
        skin: "Wasteland Rebel",
        condition: "Well-Worn"
    }
]

db.Weapon.deleteMany({})
  .then(() => db.Weapon.collection.insertMany(weaponSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });