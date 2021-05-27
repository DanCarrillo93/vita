const { User } = require("../models");
// const mongoose = require("mongoose");
// const objectId = mongoose.Types.ObjectId;

const itemController = {
  addItem: function (req, res) {
    User.findByIdAndUpdate(req.session.user._id, {
      $push: { inventory: { weapon: req.body.weaponId } },
    })
      .then((user) => res.json(user.inventory))
      .catch((err) => res.status(401).json(err));
  },
  // getUser: function (req, res) {
  //   User.findbyId(req.session.user._id)
  //     .then((res) => console.log(res.inventory))
  //     .catch((err) => res.status(400).json(err));
  // },
};

module.exports = itemController;
