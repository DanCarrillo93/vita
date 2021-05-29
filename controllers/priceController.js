const axios = require("axios");
// const mongoose = require("mongoose");
// const objectId = mongoose.Types.ObjectId;

const priceController = {
  fetchPrice: async function (req, res) {
    try {
      const priceRes = await axios.get(`https://csgobackpack.net/api/GetItemPrice/?id=${req.query.id}`);
      return res.json(priceRes.data);
    } catch (error) {
      res.status(400).end();
      console.log(error);
    }
  }
};

module.exports = priceController;
