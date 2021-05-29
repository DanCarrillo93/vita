const priceRouter = require("express").Router();
const priceController = require("../controllers/priceController");

priceRouter.route("/").get(priceController.fetchPrice);
//   .delete(() => {});
//   .get(itemController.getUser);

module.exports = priceRouter;
