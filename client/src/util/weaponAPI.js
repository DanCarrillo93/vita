import axios from "axios";

const weaponAPI = {
  addItem: function (item) {
    return axios.post("/api/items", item);
  },

  fetchUserInventory: function () {
    return axios.get("/api/users/details");
  },

  fetchWeaponInfo: function (weapon) {
    return axios.get(`/api/prices?id=${weapon}`);
  },
  addBundle: function (bundle) {
    return axios.post("/api/bundles", bundle);
  },
  deleteBundle: function (info) {
    return axios.put("/api/bundles", info);
  },
};

export default weaponAPI;
