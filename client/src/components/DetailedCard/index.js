function DetailedCard() {
  return (
    <div className="col-auto max-w-full bg-gray-600">
      <div className="inline-flex mx-auto rounded text-gray-200">
        <img
          className="flex-1 m-2 rounded"
          src="https://place-puppy.com/200x200"
        ></img>
        <div className="flex-1 m-3 max-w-full">
          <p className="text-xl">---Item Name goes here---</p>
          <p className="mt-3">---Highest Price Info goes here---</p>
          <p className="mt-3">---Lowest Price Info goes here---</p>
          <p className="mt-3">---Average Price Info goes here---</p>
        </div>
      </div>
    </div>
  );
}
export default DetailedCard;
