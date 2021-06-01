import { useAuth } from "../../util/auth";
import SimpleCard from "../SimpleCard";
import DashBundleCard from "../DashBundleCard";
import AddItemForm from "../AddItemForm";
import AddBundleForm from "../AddBundleForm";
import { useState, useEffect } from "react";
import weaponAPI from "../../util/weaponAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const weaponList = require("../../data/weapons.json");
const contextClass = {
  success: "bg-green-700",
  error: "bg-red-700",
  info: "bg-gray-600",
  warning: "bg-orange-400",
  default: "bg-indigo-800",
  dark: "bg-white-600 font-gray-300",
};

// PrivatePage is an example include to demonstrate a route protected from
// unauthenticated users. See the routing in App.js.
function Dashboard() {
  const auth = useAuth();

  const [formWeapon, setFormWeapon] = useState("");
  const [formSkin, setFormSkin] = useState("");
  const [formCondition, setFormCondition] = useState("");
  const [priceEstimate, setPriceEstimate] = useState(0);
  const [balance, setBalance] = useState(0);
  const [skinList, setSkinList] = useState([]);
  const [userInv, setUserInv] = useState([]);
  const [userBundle, setUserBundle] = useState([]);
  const [bundlePrice, setBundlePrice] = useState("");
  const [bundleButton, setBundleButton] = useState(true);

  function getUser() {
    weaponAPI.fetchUserInventory().then((user) => {
      const items = user.data.userRes.inventory.map((item) => {
        return { ...item, bundled: false, price: undefined };
      });
      setUserInv(items);
      setUserBundle(user.data.bundleRes);
      setBalance(user.data.userRes.balance / 100);
    });
  }
  useEffect(() => {
    getUser();
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
    });
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
    weaponToast(name.name);
  }

  async function handleConditionChange(e) {
    e.preventDefault();
    const condition = e.target.value;
    if (condition === "Pick a weapon") {
      setFormCondition("");
      return;
    }
    setFormCondition(condition);
  }

  async function handleSkinChange(e) {
    e.preventDefault();
    const skin = e.target.value;
    if (skin === "Pick a skin") {
      setFormSkin("");
      return;
    }
    setFormSkin(skin);
  }

  async function handleWeaponChange(e) {
    e.preventDefault();
    const weapon = e.target.value;
    if (weapon === "Pick a weapon") {
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
    // console.log(itemId);
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

    const bundledItems = newInv.filter((item) => {
      if (item.bundled === true) {
        return item;
      }
    });

    if (bundledItems.length) {
      setBundleButton(false);
    } else {
      setBundleButton(true);
    }

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

    // if (!bundleItems || !bundlePrice) {
    //   return;
    // }

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
    bundleToast();
  }

  async function handleBundleDel(e) {
    e.preventDefault();
    const id = e.target.id;
    const newBundles = await userBundle
      .filter((bundle) => {
        if (bundle._id !== id) {
          return { bundle: bundle._id };
        }
      })
      .map((bundle) => {
        return { bundle: bundle._id };
      });
    console.log(id, newBundles);
    const info = { id, newBundles };
    await weaponAPI.deleteBundle(info);
    getUser();
    bundleDeleteToast();
  }

  function weaponToast(name) {
    return toast.success(`Weapon added successfully: ${name}.`);
  }

  function bundleToast() {
    return toast.success(`Bundle added successfully.`);
  }

  function bundleDeleteToast() {
    return toast.error(`Bundle deleted successfully.`);
  }

  return (
    <div className="mx-auto font-russo">
      <div className="border-4 border-gray-300 rounded p-3 mx-3 mt-2">
        <h1 className="text-5xl text-gray-300 mb-2">
          Hello, {auth.user.username}!
        </h1>
        <h3 className="text-3xl text-gray-300">
          Your current balance:{" "}
          <span className={`text-${balance >= 0 ? "green" : "red"}-400`}>
            ${balance}
          </span>
        </h3>
      </div>

      <div className="text-gray-200 flex flex-col lg:flex-row mt-1 p-2">
        <div className="px-1 lg:w-1/3 xl:w-1/5 2xl:w-1/6">
          <div className="w-full border-4 bg-gray-300 border-gray-300 grid grid-cols-2 lg:grid-cols-1 rounded text-3xl mb-2 ">
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
              disabled={bundleButton || !bundlePrice}
              estimate={priceEstimate}
            />
          </div>
        </div>
        <div className="px-1 lg:w-1/3 xl:w-2/5 2xl:w-1/2">
          <div className="w-full border-4 border-gray-300 rounded p-2 gap-4 mb-2 text-3xl">
            Inventory
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 justify-items-center">
              {userInv.map((inv, index) => {
                return (
                  <SimpleCard
                    key={index}
                    inv={inv}
                    handleBundleChange={handleBundleChange}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="px-1 lg:w-1/3 xl:w-2/5 2xl:w-1/3">
          <div className="w-full border-4 border-gray-300 rounded p-2 text-3xl">
            Bundles
            <div className="grid grid-cols-1 xl:grid-cols-2 justify-items-center">
              {userBundle.map((bundle, index) => {
                return (
                  <DashBundleCard
                    bundle_price={bundle.bundle_price}
                    items={bundle.items}
                    _id={bundle._id}
                    handleBundleDel={handleBundleDel}
                    key={index}
                    page="dashboard"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        toastClassName={({ type }) =>
          contextClass[type || "default"] +
          " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
        }
        bodyClassName={() => "text-base font-white font-med block p-3"}
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
      />
    </div>
  );
}

export default Dashboard;
