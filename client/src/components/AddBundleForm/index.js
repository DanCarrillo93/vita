function AddBundleForm({estimate, handlePriceChange, handleBundleSubmit, bundlePrice}) {
    return (
        <form onSubmit={handleBundleSubmit} className="border-4 border-gray-300 rounded p-3 mb-2">
            Bundle Items
            <div className="font-russo text-base grid grid-cols-2">
                <label htmlFor="bundle-price" className="text-right my-2 pr-2">Price ($)</label>
                <input onChange={handlePriceChange} value={bundlePrice} id="bundle-price" className="text-gray-900 my-2" type="text" placeholder="Bundle Price" />
            </div>
            <div className="flex flex-row justify-between content-center">
                <div className="flex flex-col justify-center">
                    <p className="inline-block align-text-bottom text-base align-middle">Price Estimate: ${estimate}</p>
                </div>
                <button type="submit" className="text-sm py-2 px-3 font-sans font-bold border-2 border-green-900 bg-green-700 rounded">Bundle</button>
            </div>
        </form>
    )
};

export default AddBundleForm;