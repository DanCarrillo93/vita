function AddItemForm({handleWeaponSubmit, weaponList, handleConditionChange, handleWeaponChange, skinList, handleSkinChange}) {
    return (
        <form onSubmit={handleWeaponSubmit} className="border-4 border-gray-300 rounded p-3 mb-2">
            Add Item
            <div className="font-russo text-base grid grid-cols-2">
                <label htmlFor="weapon-type" className="text-right my-2 pr-2">Weapon Type</label>
                <select onChange={handleWeaponChange} id="weapon-type" name="Weapon Type" className="text-gray-900 my-2">
                <option key="aha" value="aha">Pick a weapon</option>
                    {weaponList.map(weapon => {
                        return (
                            <option key={weapon.weapon} value={weapon.weapon}>{weapon.weapon}</option>
                        )
                    })}
                </select>
                <label htmlFor="skin-type" className="text-right my-2 pr-2">Skin Type</label>
                <select onChange={handleSkinChange} id="skin-type" name="Skin Type" className="text-gray-900 my-2">
                    <option key="aha" value="aha">Pick a skin</option>
                    {skinList.map(skin => {
                        return (
                            <option key={skin} value={skin}>{skin}</option>
                        )
                    })}
                </select>
                <label htmlFor="condition" className="text-right my-2 pr-2">Condition</label>
                <select onChange={handleConditionChange} id="condition" name="Condition" className="text-gray-900 my-2">
                    <option key="aha" value="aha">Pick a condition</option>
                    <option value="Factory New">Factory New</option>
                    <option value="Minimal Wear">Minimal Wear</option>
                    <option value="Field-Tested">Field-Tested</option>
                    <option value="Well-Worn">Well-Worn</option>
                    <option value="Battle-Scarred">Battle-Scarred</option>
                </select>
            </div>
            <div className="flex flex-row justify-end">
                <button type="submit" className="text-sm py-2 px-3 font-sans font-bold border-2 border-green-900 bg-green-700 rounded">Add an item</button>
            </div>
        </form>
    )
};

export default AddItemForm;