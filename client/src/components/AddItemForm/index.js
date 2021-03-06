function AddItemForm({
  weapon,
  skin,
  condition,
  handleWeaponSubmit,
  weaponList,
  handleConditionChange,
  handleWeaponChange,
  skinList,
  handleSkinChange,
  disabled,
}) {
  let color;
  if (disabled) {
    color = "gray";
  } else {
    color = "green";
  }
  return (
    <form
      onSubmit={handleWeaponSubmit}
      className="bg-gray-900 rounded p-3 my-2 ml-2 mr-1 lg:mx-2 lg:mb-1"
    >
      Add Item
      <div className="font-russo text-base grid grid-cols-1">
        {/* <label htmlFor="weapon-type" className="text-right my-2 pr-2">Weapon Type</label> */}
        <select
          value={weapon}
          onChange={handleWeaponChange}
          id="weapon-type"
          name="Weapon Type"
          className="text-gray-900 my-2"
        >
          <option key="aha" value="Pick a weapon">
            Pick a weapon
          </option>
          {weaponList.map((weapon) => {
            return (
              <option key={weapon.weapon} value={weapon.weapon}>
                {weapon.weapon}
              </option>
            );
          })}
        </select>
        {/* <label htmlFor="skin-type" className="text-right my-2 pr-2">Skin Type</label> */}
        <select
          value={skin}
          onChange={handleSkinChange}
          id="skin-type"
          name="Skin Type"
          className="text-gray-900 my-2"
          disabled={!weapon}
        >
          <option key="aha" value="Pick a skin">
            Pick a skin
          </option>
          {skinList.map((skin) => {
            return (
              <option key={skin} value={skin}>
                {skin}
              </option>
            );
          })}
        </select>
        {/* <label htmlFor="condition" className="text-right my-2 pr-2">Condition</label> */}
        <select
          value={condition}
          onChange={handleConditionChange}
          id="condition"
          name="Condition"
          className="text-gray-900 my-2"
        >
          <option key="aha" value="Pick a condition">
            Pick a condition
          </option>
          <option value="Factory New">Factory New</option>
          <option value="Minimal Wear">Minimal Wear</option>
          <option value="Field-Tested">Field-Tested</option>
          <option value="Well-Worn">Well-Worn</option>
          <option value="Battle-Scarred">Battle-Scarred</option>
        </select>
      </div>
      <div className="flex flex-row justify-end">
        <button
          type="submit"
          className={`text-sm py-2 px-3 font-sans font-bold border-2 border-${color}-900 bg-${color}-700 rounded mt-1`}
          disabled={disabled}
        >
          Add an item
        </button>
      </div>
    </form>
  );
}

export default AddItemForm;
