import { useAuth } from "../../util/auth";
import SimpleCard from "../SimpleCard";
import AddItemForm from "../AddItemForm";
import AddBundleForm from "../AddBundleForm";
import { useState, useEffect } from "react";
import weaponAPI from "../../util/weaponAPI";
const weaponList = require("../../data/weapons.json");

// PrivatePage is an example include to demonstrate a route protected from
// unauthenticated users. See the routing in App.js.
function Dashboard() {
  const auth = useAuth();

  const [formWeapon, setFormWeapon] = useState("");
  const [formSkin, setFormSkin] = useState("");
  const [formCondition, setFormCondition] = useState("");
  const [priceEstimate, setPriceEstimate] = useState(0);
  const [skinList, setSkinList] = useState([]);
  const [userInv, setUserInv] = useState([]);

  useEffect(() => {
    weaponAPI.fetchUserInventory()
    .then(user => {
      const items = user.data.inventory.map(item => {
        return {...item, bundled: false, price: undefined}
      });
      setUserInv(items);
    })
  },[]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (formWeapon==="" || formSkin==="" || formCondition==="") {
      console.log("Form incomplete");
      return;
    }
    const name = { name: `${formWeapon} | ${formSkin} (${formCondition})`};
    await weaponAPI.addItem(name);
    const user = await weaponAPI.fetchUserInventory();
    const items = user.data.inventory.map(item => {return {...item, bundled: false}});
    setUserInv(items);
    setFormWeapon("");
    setFormSkin("");
    setFormCondition("");
  }

  async function handleConditionChange(e) {
    e.preventDefault();
    const condition = e.target.value;
    if (condition === "aha") {
      setFormCondition("");
      return;
    };
    console.log(userInv);
    setFormCondition(condition);
  }

  async function handleSkinChange(e) {
    e.preventDefault();
    const skin = e.target.value;
    if (skin === "aha") {
      setFormSkin("");
      return;
    };
    setFormSkin(skin);
  }

  async function handleWeaponChange(e) {
    e.preventDefault();
    const weapon = e.target.value;
    if (weapon === "aha") {
      setSkinList([]);
      setFormSkin("");
      return;
    };
    const skinList = require(`../../data/skins/${weapon}-skinList.json`);
    await setFormWeapon(weapon);
    await setSkinList(skinList);
  }

  async function handleBundleChange(e) {
    const itemId = e.target.id;
    let itemIndex;

    const newInv = userInv.map((item, index) => {
      if (item.weapon._id === itemId) {
        itemIndex = index;
        if (item.bundled) {
          item.bundled = false;
        } else {
          item.bundled = true;
        };
      };
      return item;
    });
    // console.log(itemIndex);

    if (!newInv[itemIndex].price) {
      const priceInfo = await weaponAPI.fetchWeaponInfo(newInv[itemIndex].weapon.name);
      newInv[itemIndex].price = priceInfo.data.average_price;
    }
    setUserInv(newInv);
    handleEstimate();
  }

  function handleEstimate() {
    let estimate = 0;
    userInv.forEach(item => {
      if (item.bundled && item.price) {
        estimate = estimate + parseFloat(item.price);
      }
    })
    setPriceEstimate(estimate.toFixed(2));
  }

  return (
    <div className="container mx-auto font-russo">
      <h1 className="text-5xl text-gray-300 flex-root border-4 border-gray-300 rounded p-3 mx-1 mt-2 pb-1">
        Hello, {auth.user.username}!
      </h1>

      <div className="text-gray-200 flex flex-row mt-1">
        <div className="w-1/4 border-4 border-gray-300 rounded p-2 mx-1 my-2 text-3xl">
          <AddItemForm handleSubmit={handleSubmit} weaponList={weaponList} skinList={skinList} handleConditionChange={handleConditionChange} handleSkinChange={handleSkinChange} handleWeaponChange={handleWeaponChange} />
          <AddBundleForm estimate={priceEstimate} />
        </div>
        <div className="w-1/2 border-4 border-gray-300 rounded p-2 mx-1 my-2 gap-4 text-3xl">
          Inventory
          <div className="grid grid-cols-3">
            {userInv.map((inv, index) => {
              return(
                <SimpleCard key={index} inv={inv} page="dashboard" handleBundleChange={handleBundleChange} />
              )
            })}
          </div>
        </div>
        <div className="w-1/4 border-4 border-gray-300 rounded p-2 mx-1 my-2 text-3xl">
          Bundles
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
