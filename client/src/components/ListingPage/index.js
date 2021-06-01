import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../util/auth";
import { ToastContainer, toast } from "react-toastify";
import weaponAPI from "../../util/weaponAPI";
import DetailedCard from "../DetailedCard";

const contextClass = {
  success: "bg-green-700",
  error: "bg-red-700",
  info: "bg-gray-600",
  warning: "bg-orange-400",
  default: "bg-indigo-800",
  dark: "bg-white-600 font-gray-300",
};

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
        weaponAPI.fetchWeaponInfo(items[i].weapon.name).then((response) => {
          responses.push({ ...response.data, id: items[i]._id });
        })
      );
    }
    const prices = Promise.all(promises).then(() => {
      responses.forEach((item) => {
        result.push({
          price: item,
          items: items.filter((entry) => {
            if (item.id === entry._id) {
              return entry;
            }
          }),
        });
      });
      return result;
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

  async function handlePurchaseSubmit(e) {
    e.preventDefault();
    const sellerSteam = await weaponAPI.buyBundle(id);
    console.log(sellerSteam.data);
    purchaseToast(sellerSteam.data);
    setTimeout(function () {
      window.location = "/dashboard";
    }, 5000);
  }

  function purchaseToast(id) {
    return toast.success(
      `Bundle bought successfully. Seller's Steam ID = ${id}`
    );
  }

  useEffect(() => {
    getBundle();
  }, []);

  return (
    <div className="flex flex-col my-2">
      <form className="flex flex-row justify-end text-gray-200 text-2xl">
        <div className="flex flex-col justify-center">
          <h6>
            {items.length} items listed for ${bundlePrice / 100}
          </h6>
        </div>
        <button
          type="submit"
          onClick={handlePurchaseSubmit}
          className={`mx-3 py-3 px-4 font-sans font-bold border-2 border-${color}-900 bg-${color}-700 rounded`}
          disabled={!auth.isLoggedIn()}
        >
          {auth.isLoggedIn() ? "Buy bundle" : "Log in to buy"}
        </button>
      </form>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 my-1">
        {items.map((item, index) => {
          return <DetailedCard item={item} key={index} />;
        })}
      </div>
      <form className="flex flex-row justify-end text-gray-200 text-2xl">
        <div className="flex flex-col justify-center">
          <h6>
            {items.length} items listed for ${bundlePrice / 100}
          </h6>
        </div>
        <button
          type="submit"
          onClick={handlePurchaseSubmit}
          className={`mx-3 py-3 px-4 font-sans font-bold border-2 border-${color}-900 bg-${color}-700 rounded`}
          disabled={!auth.isLoggedIn()}
        >
          {auth.isLoggedIn() ? "Buy bundle" : "Log in to buy"}
        </button>
      </form>
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

export default ListingPage;
