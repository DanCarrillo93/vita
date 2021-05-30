const { Bundle } = require("../models");
const { User } = require("../models");
// const mongoose = require("mongoose");
// const objectId = mongoose.Types.ObjectId;

const bundleController = {
  addBundle: async function (req, res) {
    try {
      const owner = req.session.user._id;
      const { items, bundle_price, bundle_type } = req.body;
      console.log(items);
      const bundle = new Bundle({
        items: items,
        bundle_price: bundle_price,
        bundle_type: bundle_type,
        owner: owner,
      });
      console.log(bundle);
      await bundle.save();
      const user = await User.findByIdAndUpdate(
        owner,
        {
          $push: { bundles: { bundle: bundle._id } },
        },
        { new: true }
      );
      console.log(bundle, user);
      return res.json(user);
    } catch (error) {
      res.status(400).end();
      console.log(error);
    }
  },

  //   deleteBundle: async function (req,res) {
  //       try {
  //           const id = req.params.id
  //           const bundle = await Bundle.deleteOne({_id: id})
  //       } catch (error) {

  //       }
  //   }
};

module.exports = bundleController;
