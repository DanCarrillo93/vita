function SimpleCard({ inv, page, handleBundleChange }) {
  return (
    <div className="font-russo border border-gray-600 bg-gray-500 rounded max-w-max m-1 col-auto px-1 text-base">
      <div className="text-gray-200 rounded m-2">
        <h6 className="mb-2">{inv.weapon.name}</h6>
        <img
          src={inv.weapon.URL}
          className="rounded bg-gray-800 p-3"
          alt="aaa"
        />
        <div className="text-xs font-sans font-bold mt-2 flex flex-row justify-end">
          {/* <p className="mr-2">This bundle has --x-- other items</p> */}
          {!inv.bundled && (
            <button
              onClick={handleBundleChange}
              id={inv.weapon._id}
              className="text-xs font-sans font-bold border-2 border-green-900 bg-green-700 rounded p-2"
            >
              Add to bundle
            </button>
          )}
          {inv.bundled && (
            <button
              onClick={handleBundleChange}
              id={inv.weapon._id}
              className="text-xs font-sans font-bold border-2 border-red-900 bg-red-700 rounded p-2"
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
