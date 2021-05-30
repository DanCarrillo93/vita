const { User, Weapon } = require("../models");
// const mongoose = require("mongoose");
// const objectId = mongoose.Types.ObjectId;

const itemController = {
  addItem: async function (req, res) {
    try {
      // console.log(req.body);
      const { name } = req.body;
      console.log(name);
      const weapon = await Weapon.findOne({ name }, { select: "_id" });
      // console.log(weapon);
      const user = await User.findByIdAndUpdate(
        req.session.user._id,
        {
          $push: { inventory: { weapon: weapon._id } },
        },
        { new: true }
      );
      return res.json(user);
    } catch (error) {
      res.status(400).end();
      console.log(error);
    }
  },
};

module.exports = itemController;
