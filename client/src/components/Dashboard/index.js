import { useAuth } from "../../util/auth";
import SimpleCard from "../SimpleCard";
import DashBundleCard from "../DashBundleCard";
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
  const [userBundle, setUserBundle] = useState([]);
  const [bundlePrice, setBundlePrice] = useState("");

  useEffect(() => {
    weaponAPI.fetchUserInventory().then((user) => {
      const items = user.data.userRes.inventory.map((item) => {
        return { ...item, bundled: false, price: undefined };
      });
      setUserInv(items);
      setUserBundle(user.data.bundleRes);
      // console.log(userBundle);
    });
  }, []);

  async function handleWeaponSubmit(e) {
    e.preventDefault();
    if (formWeapon === "" || formSkin === "" || formCondition === "") {
      console.log("Form incomplete");
      return;
    }
    let nameId = -1;
    weaponList.forEach((item, index) => {
      if (item.weapon === formWeapon) {
        nameId = index;
      }
    })
    // console.log(nameId);
    let weaponName = formWeapon;
    if (nameId >= 34) {
      weaponName = `★ ${formWeapon}`;
    }
    const name = { name: `${weaponName} | ${formSkin} (${formCondition})` };
    await weaponAPI.addItem(name);
    const user = await weaponAPI.fetchUserInventory();
    const items = user.data.userRes.inventory.map((item) => {
      return { ...item, bundled: false };
    });
    setUserInv(items);
    setFormWeapon("Pick a weapon");
    setFormSkin("Pick a skin");
    setFormCondition("Pick a condition");
  }

  async function handleConditionChange(e) {
    e.preventDefault();
    const condition = e.target.value;
    if (condition === "aha") {
      setFormCondition("");
      return;
    }
    setFormCondition(condition);
  }

  async function handleSkinChange(e) {
    e.preventDefault();
    const skin = e.target.value;
    if (skin === "aha") {
      setFormSkin("");
      return;
    }
    setFormSkin(skin);
  }

  async function handleWeaponChange(e) {
    e.preventDefault();
    const weapon = e.target.value;
    if (weapon === "aha") {
      setSkinList([]);
      setFormSkin("");
      return;
    }
    const skinList = require(`../../data/skins/${weapon}-skinList.json`);
    await setFormWeapon(weapon);
    await setSkinList(skinList);
  }

  async function handleBundleChange(e) {
    const itemId = e.target.id;
    console.log(itemId);
    let itemIndex;

    const newInv = userInv.map((item, index) => {
      // console.log(item._id);
      if (item._id === itemId) {
        itemIndex = index;
        if (item.bundled) {
          item.bundled = false;
        } else {
          item.bundled = true;
        }
      }
      return item;
    });
    // console.log(itemIndex);

    if (!newInv[itemIndex].price) {
      const priceInfo = await weaponAPI.fetchWeaponInfo(
        newInv[itemIndex].weapon.name
      );
      newInv[itemIndex].price = priceInfo.data.average_price;
    }
    setUserInv(newInv);
    handleEstimate();
  }

  function handleEstimate() {
    let estimate = 0;
    userInv.forEach((item) => {
      if (item.bundled && item.price) {
        estimate = estimate + parseFloat(item.price);
      }
    });
    setPriceEstimate(estimate.toFixed(2));
  }

  function handlePriceChange(e) {
    e.preventDefault();
    setBundlePrice(e.target.value);
  }

  async function handleBundleSubmit(e) {
    e.preventDefault();
    let newInv = [];
    const bundleItems = userInv.filter((item) => {
      if (item.bundled) {
        return item;
      }
      newInv.push(item);
    });

    if (bundleItems.length > 1) {
      let id = 0;
      for (let i = 1; i < bundleItems.length; i++) {
        if (
          parseFloat(bundleItems[id].price) < parseFloat(bundleItems[i].price)
        ) {
          id = i;
        }
      }
      const expensive = bundleItems.splice(id, 1);
      bundleItems.unshift(expensive[0]);
    }

    const items = bundleItems.map((item) => {
      return {
        _id: item._id,
        weapon: item.weapon._id,
      };
    });
    let bundle_type = [];
    bundleItems.forEach((item) => {
      if (!bundle_type.includes(item.weapon.sub_type)) {
        bundle_type.push(item.weapon.sub_type);
      }
    });
    const bundle = {
      items,
      bundle_price: bundlePrice * 100,
      bundle_type,
      newInv,
    };
    // console.log(bundle);
    const newUser = await weaponAPI.addBundle(bundle);
    // console.log(newUser);
    setUserInv(
      newUser.data.userRes.inventory.map((item) => {
        return { ...item, bundled: false, price: undefined };
      })
    );
    // setUserBundle(newUser.data.bundleRes.items);
    setUserBundle(newUser.data.bundleRes);
    setPriceEstimate(0);
    setBundlePrice("");
  }

  async function handleBundleDel(e) {
    e.preventDefault();
    console.log(e.target.id);
  }
  return (
    <div className="mx-auto font-russo">
      <h1 className="text-5xl text-gray-300 flex-root border-4 border-gray-300 rounded p-3 mx-1 mt-2 pb-1">
        Hello, {auth.user.username}!
      </h1>

      <div className="text-gray-200 flex flex-row mt-1">
        <div className="w-1/4 border-4 border-gray-300 rounded p-2 mx-1 my-2 text-3xl">
          <AddItemForm
            weapon={formWeapon}
            skin={formSkin}
            condition={formCondition}
            handleWeaponSubmit={handleWeaponSubmit}
            weaponList={weaponList}
            skinList={skinList}
            handleConditionChange={handleConditionChange}
            handleSkinChange={handleSkinChange}
            handleWeaponChange={handleWeaponChange}
          />
          <AddBundleForm
            handleBundleSubmit={handleBundleSubmit}
            handlePriceChange={handlePriceChange}
            bundlePrice={bundlePrice}
            estimate={priceEstimate}
          />
        </div>
        <div className="w-1/2 border-4 border-gray-300 rounded p-2 mx-1 my-2 gap-4 text-3xl">
          Inventory
          <div className="grid grid-cols-3">
            {userInv.map((inv, index) => {
              return (
                <SimpleCard
                  key={index}
                  inv={inv}
                  page="dashboard"
                  handleBundleChange={handleBundleChange}
                />
              );
            })}
          </div>
        </div>
        <div className="w-1/4 border-4 border-gray-300 rounded p-2 mx-1 my-2 text-3xl">
          Bundles
          <div className="grid grid-cols-1">
            {userBundle.map((bundle, index) => {
              return (
                <DashBundleCard
                  bundle_price={bundle.bundle_price}
                  items={bundle.items}
                  _id={bundle._id}
                  handleBundleDel={handleBundleDel}
                  key={index}
                  page="dashboard"
                  handleBundleChange={handleBundleChange}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
