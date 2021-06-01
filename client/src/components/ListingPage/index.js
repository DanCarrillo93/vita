import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../util/auth";
import weaponAPI from "../../util/weaponAPI";
import DetailedCard from "../DetailedCard";

function ListingPage() {
  const [items, setItems] = useState([]);
  const [bundlePrice, setBundlePrice] = useState("");

  const { id } = useParams();
  const auth = useAuth();
  let color;
  if (auth.isLoggedIn()) {
    color = "green";
  } else {
    color = "gray";
  }

  async function fetchPrice(items) {
      let responses = [];
      let promises = [];
      let result = [];
      for (let i = 0; i < items.length; i++) {
          promises.push(
              weaponAPI.fetchWeaponInfo(items[i].weapon.name).then(response => {
                  responses.push({...response.data, id: items[i]._id})
              })
          )
      }
      const prices = Promise.all(promises).then(() => {
        responses.forEach(item => {
            result.push({
                price: item,
                items: items.filter(entry => {
                    if (item.id === entry._id) {
                        return entry;
                    }
                }),
            })
        });
        return(result);
      });
      return prices;
  }

  async function getBundle() {
    const bundleRes = await weaponAPI.getBundle(id);
    setBundlePrice(bundleRes.data.bundle_price);
    const items = bundleRes.data.items;
    const priceInfo = await fetchPrice(items);
    setItems(priceInfo);
  }

  useEffect(() => {
    getBundle();
  }, []);

  return (
    <div className="flex flex-col my-2">
      <form className="flex flex-row justify-end text-gray-200 text-2xl">
        <div className="flex flex-col justify-center">
          <h6>{items.length} items listed for ${bundlePrice / 100}</h6>
        </div>
        <button
          type="submit"
          className={`mx-3 py-3 px-4 font-sans font-bold border-2 border-${color}-900 bg-${color}-700 rounded`}
          disabled={!auth.isLoggedIn()}
        >
          {auth.isLoggedIn() ? "Buy bundle" : "Log in to buy"}
        </button>
      </form>
      <div className="grid grid-cols-3 my-1">
        {items.map(item => {
            return (
            <DetailedCard item={item} />
            )
        })}
      </div>
      <form className="flex flex-row justify-end text-gray-200 text-2xl">
        <div className="flex flex-col justify-center">
          <h6>{items.length} items listed for ${bundlePrice / 100}</h6>
        </div>
        <button
          type="submit"
          className={`mx-3 py-3 px-4 font-sans font-bold border-2 border-${color}-900 bg-${color}-700 rounded`}
          disabled={!auth.isLoggedIn()}
        >
          {auth.isLoggedIn() ? "Buy bundle" : "Log in to buy"}
        </button>
      </form>
    </div>
  );
}

export default ListingPage;
