function DashBundleCard({ bundle_price, items, page, _id, handleBundleDel }) {
  // console.log(_id);
  return (
    <div className="font-russo border border-gray-600 bg-gray-500 rounded max-w-max m-1 col-auto px-1 text-base">
      <div className="text-gray-200 rounded m-2">
        <h6 className="mb-2">{items[0].weapon.name}</h6>
        <img
          src={items[0].weapon.url}
          className="rounded bg-gray-800 p-3"
          alt="aaa"
        />
        <div className="text-xs font-sans font-bold mt-2 flex flex-row justify-between">
          {page === "dashboard" && (
            <>
              <div className="flex flex-col justify-center">
                <h6 className="text-sm">
                  This bundle has {items.length} item(s)
                </h6>
              </div>
              <button
                id={_id}
                onClick={handleBundleDel}
                className="text-xs font-sans font-bold border-2 border-green-900 bg-red-700 rounded p-2"
              >
                {" "}
                Delete from bundle
              </button>
            </>
          )}
          {page === "home" && (
            <>
              <div className="flex flex-col justify-center">
                <h6 className="text-sm">
                  This bundle has {items.length} item(s)
                </h6>
                <h6 className="text-sm">Bundle Price: ${bundle_price / 100}</h6>
              </div>
              <button
                id={_id}
                // onClick={handleBundleDel}
                className="text-xs font-sans font-bold border-2 border-blue-900 bg-blue-700 rounded p-2"
              >
                {" "}
                View Bundle
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default DashBundleCard;
