const { Bundle } = require("../models");
// const mongoose = require("mongoose");
// const objectId = mongoose.Types.ObjectId;

const bundleController = {
  addBundle: async function (req, res) {
    try {
      const bundle = new Bundle(req.body);
      await bundle.save();
      return res.json(bundle);
    } catch (error) {
      res.status(400).end();
      console.log(error);
    }
  },
};

module.exports = bundleController;
