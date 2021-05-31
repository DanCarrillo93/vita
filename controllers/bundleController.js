const { Bundle } = require("../models");
const { User } = require("../models");
// const mongoose = require("mongoose");
// const objectId = mongoose.Types.ObjectId;

const bundleController = {
  addBundle: async function (req, res) {
    try {
      const owner = req.session.user._id;
      const { items, bundle_price, bundle_type } = req.body;
      let { newInv } = req.body;
      if (!newInv) {
        newInv = [];
      }
      // console.log(items);
      const bundle = new Bundle({
        items: items,
        bundle_price: bundle_price,
        bundle_type: bundle_type,
        owner: owner,
      });
      // console.log(bundle);
      await bundle.save();
      await User.findByIdAndUpdate(
        owner,
        {
          $push: { bundles: { bundle: bundle._id } },
          inventory: newInv,
        },
        { new: true }
      );
      const bundleRes = await Bundle.find()
        .where("owner")
        .all([owner])
        .populate({
          path: "items.weapon",
        });
      // console.log(bundleRes[0].items);
      const userRes = await User.findById(owner)
        .populate({
          path: "inventory.weapon",
        })
        .populate({
          path: "bundles.bundle",
        });
      // .populate({
      //   path: "bundles.bundle.items",
      // })
      // .populate({
      //   path: "bundles.bundle.items.weapon",
      // });
      return res.json({ userRes, bundleRes });
      // console.log(bundle, user);
    } catch (error) {
      res.status(400).end();
      console.log(error);
    }
  },

  deleteBundle: async function (req, res) {
    try {
      const owner = req.session.user._id;
      const { id } = req.body;
      let { newBundles } = req.body;
      if (!newBundles) {
        newBundles = [];
      }
      // console.log(req);
      const bundle = await Bundle.findById(id);
      // console.log(owner);
      const user = await User.findByIdAndUpdate(
        owner,
        {
          $addToSet: { inventory: { $each: bundle.items } },
          bundles: newBundles,
        },
        { new: true }
      );
      await Bundle.deleteOne({ _id: id });
      // console.log(user);
      return res.json({ user });
    } catch (error) {
      res.status(400).end();
      console.log(error);
    }
  },

  getBundles: async function (req, res) {
    try {
      const { bundle_type } = req.query;
      // console.log(bundle_type);
      let owner = "";
      let bundleRes = [];
      if (!req.session?.user) {
        if (bundle_type) {
          bundleRes = await Bundle.find({ bundle_type })
            .populate({ path: "items.weapon" })
            .limit(50);
        } else {
          bundleRes = await Bundle.find({})
            .populate({ path: "items.weapon" })
            .limit(50);
        }
      } else {
        owner = req.session.user._id;
        if (bundle_type) {
          bundleRes = await Bundle.find({
            owner: { $ne: owner },
            bundle_type,
          })
            .populate({
              path: "items.weapon",
            })
            .limit(50);
        } else {
          bundleRes = await Bundle.find({ owner: { $ne: owner } })
            .populate({
              path: "items.weapon",
            })
            .limit(50);
        }
      }
      // console.log(owner, bundleRes.length);
      return res.json({ bundleRes });
    } catch (error) {
      res.status(400).end();
      console.log(error);
    }
  },

  getBundle: async function (req, res) {
    try {
      const { id } = req.params;
      // console.log(id);
      const bundleRes = await Bundle.findById(id).populate({
        path: "items.weapon",
      });
      console.log(bundleRes);
      return res.json(bundleRes);
    } catch (error) {
      res.status(400).end();
      console.log(error);
    }
  },

  purchaseBundle: async function (req, res) {
    try {
      const { id } = req.params;
      const buyerId = req.session.user._id;
      const bundle = await Bundle.findById(id);
      const sellerId = bundle.owner;
      let buyer = await User.findByIdAndUpdate(
        buyerId,
        { $addToSet: { inventory: { $each: bundle.items } } },
        { new: true }
      );
      const seller = await User.findById(sellerId);
      const newBundles = seller.bundles.filter(
        (bundles) => bundles.bundle !== id
      );
      await User.findByIdAndUpdate(sellerId, {
        balance: seller.balance + bundle.bundle_price,
        bundles: newBundles,
      });
      buyer = await User.findByIdAndUpdate(
        buyerId,
        {
          balance: buyer.balance - bundle.bundle_price,
        },
        { new: true }
      );
      await Bundle.deleteOne({ _id: id });
      console.log(buyer, seller);
      return res.json(buyer);
    } catch (error) {
      res.status(400).end();
      console.log(error);
    }
  },
};

module.exports = bundleController;
