const itemRouter = require("express").Router();
const itemController = require("../controllers/itemController");

itemRouter.route("/api/users")
    .put(itemController.addItem)
    .delete(() => {})
    .get(itemController.getUser);

module.exports = itemRouter;