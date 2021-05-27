function SimpleCard() {
  return (
    <div className="border border-gray-600 bg-gray-600 rounded max-w-max mx-auto col-auto">
      <div className="text-gray-200 rounded m-2">
        <h1 className="text-xl mb-1">Bundle Title (most expensive item)</h1>
        <img src="https://place-puppy.com/325x325" className="rounded" />
        <div className="text-sm mt-2">
          <p className=" inline mr-2">This bundle hax --x-- other items</p>
          <button className="border-2 border-green-900 bg-green-700 rounded inline">
            --Bundle Price--
          </button>
        </div>
      </div>
    </div>
  );
}
export default SimpleCard;
