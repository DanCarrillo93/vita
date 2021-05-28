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
      res.status(400).end();
      console.log(error);
    }
  },
};

module.exports = itemController;
