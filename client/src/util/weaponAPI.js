import axios from "axios";

const weaponAPI = {
    addItem: function(item) {
        return axios.post("/api/items", item);
    }
};

export default weaponAPI;