// import { Link } from "react-router-dom";
const rarityColor = require("../../util/rarityColor");

function DashBundleCard({ bundle_price, items, page, _id, handleBundleDel, handleView }) {
  const color = rarityColor(items[0].weapon.rarity);
  return (
    <div className="font-russo border border-gray-600 bg-gray-500 rounded max-w-max m-1 col-auto px-1 text-base">
      <div className="text-gray-200 rounded m-2">
        <h6 className="mb-2">{items[0].weapon.name}</h6>
        <img
          src={items[0].weapon.url}
          className={`rounded bg-gray-800 p-3 border-4 border-${color}`}
          alt="aaa"
        />
        <div className="text-xs font-sans font-bold mt-2 flex flex-col">
          {page === "dashboard" && (
            <>
              <div className="flex flex-row justify-between">
                <h6 className="text-sm">
                  {items.length} item{items.length > 1 && "s"} listed for ${bundle_price / 100}
                </h6>
                {color === "consumer"
                ? <span className={`text-gray-700 text-xs uppercase bg-${color} py-1 px-4 rounded-full`}>{items[0].weapon.rarity}</span>
                : <span className={`text-xs uppercase bg-${color} py-1 px-4 rounded-full`}>{items[0].weapon.rarity}</span>}
                
              </div>
              <div className="flex flex-row justify-end">
                <button
                  id={_id}
                  onClick={handleBundleDel}
                  className="mt-2 text-xs font-sans font-bold border-2 border-red-900 bg-red-700 rounded py-2 px-3"
                >
                  {" "}
                  Delete bundle
                </button>
              </div>
            </>
          )}
          {page === "home" && (
            <>
              <div className="flex flex-row justify-between">
                <h6 className="text-sm">
                  {items.length} item{items.length > 1 && "s"} listed for ${bundle_price / 100}
                </h6>
                <span className={`text-xs uppercase bg-${color} py-1 px-4 rounded-full`}>{items[0].weapon.rarity}</span>
              </div>
              <div className="flex flex-row justify-end">
                <button
                  id={_id}
                  onClick={handleView}
                  className="mt-2 text-xs font-sans font-bold border-2 border-blue-900 bg-blue-700 rounded py-2 px-3"
                >
                  {" "}
                  View bundle
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default DashBundleCard;
