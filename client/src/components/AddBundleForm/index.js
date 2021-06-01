function AddBundleForm({
  disabled,
  estimate,
  handlePriceChange,
  handleBundleSubmit,
  bundlePrice,
}) {
  let color;
  if (disabled) {
    color = "gray";
  } else {
    color = "green";
  }
  return (
    <form
      onSubmit={handleBundleSubmit}
      className="bg-gray-900 rounded p-3 my-2 ml-1 mr-2 lg:mx-2 lg:mt-1"
    >
      Bundle Items
      <div className="font-russo text-base grid grid-cols-1">
        {/* <label htmlFor="bundle-price" className="text-right my-2 pr-2">Price ($)</label> */}
        <input
          onChange={handlePriceChange}
          value={bundlePrice}
          id="bundle-price"
          className="text-gray-900 my-2 px-1"
          type="text"
          placeholder="Bundle Price $ (USD)"
        />
      </div>
      <div className="flex flex-row justify-between content-center">
        <div className="flex flex-col justify-center">
          <p className="inline-block align-text-bottom text-base align-middle">
            Price Estimate: ${estimate}
          </p>
        </div>
        <button
          disabled={disabled}
          type="submit"
          className={`text-sm py-2 px-3 font-sans font-bold border-2 border-${color}-900 bg-${color}-700 rounded`}
        >
          Bundle
        </button>
      </div>
    </form>
  );
}

export default AddBundleForm;
