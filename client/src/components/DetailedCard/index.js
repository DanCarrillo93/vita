function DetailedCard() {
  return (
    <div className="inline-flex mx-auto bg-gray-600 rounded text-gray-200">
      <img
        className="flex-1 m-2 rounded"
        src="https://place-puppy.com/200x200"
      ></img>
      <div className="flex-1 m-3">
        <p className="text-xl">---Item Name goes here---</p>
        <p className="mt-3">---Highest Price Info goes here---</p>
        <p className="mt-3">---Lowest Price Info goes here---</p>
        <p className="mt-3">---Average Price Info goes here---</p>
      </div>
    </div>
  );
}
export default DetailedCard;
