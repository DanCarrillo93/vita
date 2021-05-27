const { User, Weapon } = require("../models");
// const mongoose = require("mongoose");
// const objectId = mongoose.Types.ObjectId;

const itemController = {
  addItem: async function (req, res) {
    try {
      const { name } = req.body;
      const weapon = await Weapon.findOne({ name }, { select: "_id" });
      const user = await User.findByIdAndUpdate(req.session.user._id, {
        $push: { inventory: { weapon: weapon._id } },
      });
      return res.json(user);
    } catch (error) {
      res.status(403).end();
      console.log(error);
    }
  },
  // addBundle: function () = {
  //   Bundle.create({

  //   })
  // },

  // getUser: function (req, res) {
  //   User.findbyId(req.session.user._id)
  //     .then((res) => console.log(res.inventory))
  //     .catch((err) => res.status(400).json(err));
  // },
};

module.exports = itemController;
