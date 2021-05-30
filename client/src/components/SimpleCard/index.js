const rarityColor = require("../../util/rarityColor");

function SimpleCard({ inv, page, handleBundleChange }) {
  const color = rarityColor(inv.weapon.rarity);
  // console.log(color);
  return (
    <div className="font-russo border border-gray-600 bg-gray-500 rounded max-w-max m-1 col-auto px-1 text-base">
      <div className="text-gray-200 rounded m-2">
        <h6 className="mb-2">{inv.weapon.name}</h6>
        <img
          src={inv.weapon.url}
          className={`rounded bg-gray-800 p-3 border-8 border-${color}`}
          alt="aaa"
        />
        <div className="text-xs font-sans font-bold mt-2 flex flex-row justify-end">
          <div className="w-auto">
            {color === "consumer"
            ? <h6 className={`text-gray-700 uppercase text-xs bg-${color} py-1 px-4 rounded-full`}>
                {inv.weapon.rarity}
              </h6>
            : <h6 className={`uppercase text-xs bg-${color} py-1 px-4 rounded-full`}>
                {inv.weapon.rarity}
              </h6>}
          </div>
        </div>
        <div className="text-xs font-sans font-bold mt-2 flex flex-row justify-end">
        {!inv.bundled && (
            <button
              onClick={handleBundleChange}
              id={inv._id}
              className="text-xs font-sans font-bold border-2 border-green-900 bg-green-700 rounded p-1"
            >
              Add to bundle
            </button>
          )}
          {inv.bundled && (
            <button
              onClick={handleBundleChange}
              id={inv._id}
              className="text-xs font-sans font-bold border-2 border-red-900 bg-red-700 rounded p-1"
            >
              Remove from bundle
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default SimpleCard;
