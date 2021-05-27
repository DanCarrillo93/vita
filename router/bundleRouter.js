const bundleRouter = require("express").Router();
const bundleController = require("../controllers/bundleController");

bundleRouter.route("/").post(bundleController.addBundle);
//   .delete(() => {});
//   .get(bundleController.getUser);

bundleRouter.route("/");

module.exports = bundleRouter;
