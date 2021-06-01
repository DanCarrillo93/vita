const rarityColor = require("../../util/rarityColor");

function DetailedCard({item}) {
  const entry = item.items[0];
  const price = item.price;
  const color = rarityColor(entry.weapon.rarity);
  return (
    <div className="col-auto max-w-full border border-gray-600 bg-gray-500 rounded m-1">
      <div className="m-2 inline-flex rounded text-gray-200 grid grid-cols-2">
        <div className="flex flex-col justify-center">
          <img
            className={`max-w-full rounded bg-gray-800 p-3 border-4 border-${color}`}
            src={entry.weapon.url}
            alt={entry.weapon.name}
          />
        </div>
        <div className="flex-1 m-3 max-w-full font-russo">
          <p className="text-xl">{entry.weapon.name}</p>
          <p className="my-2 font-sans font-bold">
            {color === "consumer" 
            ? <span className={`text-gray-700 text-xs uppercase bg-${color} py-1 px-4 rounded-full`}>{entry.weapon.rarity}</span>
            : <span className={`text-xs uppercase bg-${color} py-1 px-4 rounded-full`}>{entry.weapon.rarity}</span>}
            
            </p>
          <p className="text-md">Price info for the past 30 days</p>
          <p className="mt-1 text-green-300">Highest price: ${price.highest_price}</p>
          <p className="mt-1 text-yellow-300">Average price: USD ${price.average_price}</p>
          <p className="mt-1 text-red-300">Lowest price: ${price.lowest_price}</p>
          <p className="mt-1 text-blue-300">Quantity traded: {price.amount_sold || 0}</p>
        </div>
      </div>
    </div>
  );
}
export default DetailedCard;
