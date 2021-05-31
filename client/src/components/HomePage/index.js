import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import DashBundleCard from "../DashBundleCard";
import weaponAPI from "../../util/weaponAPI";

function HomePage() {
  const history = useHistory();

  const [bundles, setBundles] = useState([]);

  // async function getBundles(filter = "") {
  async function getBundles() {
    const fetchedBundles = await weaponAPI.getBundles();
    // console.log(fetchedBundles);
    setBundles(fetchedBundles.data.bundleRes);
    // console.log(bundles);
  }

  useEffect(() => {
    getBundles();
  }, []);

  function handleView(e) {
    // console.log(e.target.id);
    window.location = `/listing/${e.target.id}`;
  }

  return (
    <div className="mx-auto font-russo">
      <div className="border-4 border-gray-300 rounded p-3 mx-1 mt-2 pb-1">
        <h1 className="text-5xl text-gray-300 mb-2">Listings</h1>
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
