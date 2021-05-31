const bundleRouter = require("express").Router();
const bundleController = require("../controllers/bundleController");

bundleRouter
  .route("/")
  .post(bundleController.addBundle)
  .put(bundleController.deleteBundle);
//   .get(bundleController.getBundles);

module.exports = bundleRouter;
