import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import DashBundleCard from "../DashBundleCard";
import weaponAPI from "../../util/weaponAPI";

const weaponList = require("../../data/weapons.json");

function HomePage() {
  const history = useHistory();

  const [bundles, setBundles] = useState([]);
  const [filter, setFilter] = useState("");

  // async function getBundles(filter = "") {
  async function getBundles(filter = "") {
    const fetchedBundles = await weaponAPI.getBundles(filter);
    // console.log(fetchedBundles);
    setBundles(fetchedBundles.data.bundleRes);
    // console.log(bundles);
  }

  useEffect(() => {
    getBundles();
  }, []);

  function handleFilter(e) {
    const bundleFilter = e.target.value;
    if (bundleFilter === "Pick a weapon") {
      getBundles();
    } else {
      getBundles(bundleFilter);
    }
    setFilter(bundleFilter);
  }

  function handleView(e) {
    // console.log(e.target.id);
    window.location = `/listing/${e.target.id}`;
  }

  return (
    <div className="mx-auto font-russo">
      <div className="border-4 flex flex-row border-gray-300 rounded p-3 mx-1 mt-2">
        <h1 className="text-5xl text-gray-300 mr-8">Listings</h1>
        <form className="flex flex-col justify-center text-2xl">
          <select id="weapon-type" onChange={handleFilter} value={filter}>
            <option key="aha" value="Pick a weapon">Pick a weapon</option>
            {weaponList.map(weapon => {
              return (
                <option key={weapon.weapon} value={weapon.weapon}>{weapon.weapon}</option>
              )
            })}
          </select>
        </form>
      </div>

      <div className="grid grid-cols-5 border-4 border-gray-300 rounded p-2 mx-1 my-2 gap-4">
        {!bundles.length && <h3 className="text-3xl text-gray-300">No listings found!</h3>}
        {bundles.map((bundle, index) => {
          return (
            <DashBundleCard
              key={index}
              bundle_price={bundle.bundle_price}
              items={bundle.items}
              _id={bundle._id}
              page="home"
              handleView={handleView}
            />
          )
        })}
      </div>

    </div>
  );
}

export default HomePage;
