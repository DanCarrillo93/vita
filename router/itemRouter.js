const itemRouter = require("express").Router();
const itemController = require("../controllers/itemController");

itemRouter.route("/").post(itemController.addItem);
//   .delete(() => {});
//   .get(itemController.getUser);

module.exports = itemRouter;
