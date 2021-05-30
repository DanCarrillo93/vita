const axios = require("axios");
// const mongoose = require("mongoose");
// const objectId = mongoose.Types.ObjectId;

const priceController = {
  fetchPrice: async function (req, res) {
    try {
      let query = req.query.id;
      // console.log(req.query.id);
      if (query.includes(`★ `)) {
        query = "%E2%98%85%20" + query.substring(2);
      }
      console.log(query);
      const priceRes = await axios.get(`https://csgobackpack.net/api/GetItemPrice/?id=${query}&time=30`);
      return res.json(priceRes.data);
    } catch (error) {
      res.status(400).end();
      console.log(error);
    }
  }
};

module.exports = priceController;
