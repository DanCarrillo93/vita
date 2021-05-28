import axios from "axios";

const weaponAPI = {
    addItem: function(item) {
        return axios.post("/api/items", item);
    },

    fetchUserInventory: function() {
        return axios.get("/api/users/details");
    }
};

export default weaponAPI;