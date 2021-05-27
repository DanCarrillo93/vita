function SimpleCard() {
  return (
    <div className="border border-gray-600 bg-gray-500 rounded max-w-max m-1 col-auto px-1 text-base">
      <div className="text-gray-200 rounded m-2">
        <h6 className="mb-1">Bundle Title (most expensive item)</h6>
        <img
          src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092lnYmGmOHLPr7Vn35cppQiiOuQpoml3wW18xdkNTjxd9CQdwM_ZlrT-lW_kLzu0560vp-azXJ9-n51Q5-Fea0"
          className="rounded bg-gray-900 p-3"
        />
        <div className="text-xs font-sans font-bold mt-2 flex flex-row justify-between">
          <p className="mr-2">This bundle has --x-- other items</p>
          <button className="text-xs font-sans font-bold border-2 border-green-900 bg-green-700 rounded">
            --Bundle Price--
          </button>
        </div>
      </div>
    </div>
  );
}
export default SimpleCard;
