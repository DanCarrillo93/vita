const router = require("express").Router();
const clientRouter = require("./clientRouter");
const userRouter = require("./userRouter");
const itemRouter = require("./itemRouter");
const priceRouter = require("./priceRouter");
const bundleRouter = require("./bundleRouter");

router.use("/api/users", userRouter);
router.use("/api/items", itemRouter);
router.use("/api/prices", priceRouter);
router.use("/api/bundles", bundleRouter);

// server react client and static assets (usually on heroku)
// create-react-app dev server used in development
if (process.env.NODE_ENV === "production") {
  router.use(clientRouter);
}

module.exports = router;
