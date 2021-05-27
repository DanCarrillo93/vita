function SimpleCard() {
  return (
    <div className="border border-indigo-600 bg-gray-600 rounded">
      <div className="text-gray-200 rounded m-2">
        <h1 className="card-title text-xl mb-2">
          Bundle Title (most expensive item)
        </h1>
        <img src="https://place-puppy.com/250x250" />
        <div className="text-sm">
          <p className="card-text">This bundle hax --x-- other items</p>
          <button className="border-2 border-green-700 bg-green-700 rounded ">
            --Bundle Price--
          </button>
        </div>
      </div>
    </div>
  );
}
export default SimpleCard;
