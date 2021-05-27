import { useAuth } from "../../util/auth";
import SimpleCard from "../SimpleCard";
import AddItemForm from "../AddItemForm";
import { useState } from "react";
const weaponList = require("../../data/weapons.json");

// PrivatePage is an example include to demonstrate a route protected from
// unauthenticated users. See the routing in App.js.
function Dashboard() {
  const auth = useAuth();

  const [formWeapon, setFormWeapon] = useState("");
  const [formSkin, setFormSkin] = useState("");
  const [formCondition, setFormCondition] = useState("");
  const [skinList, setSkinList] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (formWeapon==="" || formSkin==="" || formCondition==="") {
      console.log("Form incomplete");
      return;
    }
    const name = `${formWeapon} | ${formSkin} (${formCondition})`;
    console.log(name);
  }

  async function handleConditionChange(e) {
    e.preventDefault();
    const condition = e.target.value;
    if (condition === "aha") {
      setFormCondition("");
      return;
    };
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

  return (
    <div className="container mx-auto font-russo">
      <h1 className="text-5xl text-gray-300 flex-root border-4 border-gray-300 rounded p-3 mx-1 mt-2 pb-1">
        Hello, {auth.user.username}!
      </h1>

      <div className="text-gray-200 flex flex-row mt-1">
        <div className="w-1/4 border-4 border-gray-300 rounded p-2 mx-1 my-2 text-3xl">
          <AddItemForm handleSubmit={handleSubmit} weaponList={weaponList} skinList={skinList} handleConditionChange={handleConditionChange} handleSkinChange={handleSkinChange} handleWeaponChange={handleWeaponChange} />
        </div>
        <div className="w-1/2 border-4 border-gray-300 rounded p-2 mx-1 my-2 gap-4 text-3xl">
          Inventory
          <div className="grid grid-cols-3">
            <SimpleCard />
            <SimpleCard />
            <SimpleCard />
            <SimpleCard />
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
