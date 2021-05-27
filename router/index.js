const router = require("express").Router();
const clientRouter = require("./clientRouter");
const userRouter = require("./userRouter");
const itemRouter = require("./itemRouter");

router.use("/api/users", userRouter);
router.use("/api/items", itemRouter);

// server react client and static assets (usually on heroku)
// create-react-app dev server used in development
if (process.env.NODE_ENV === "production") {
  router.use(clientRouter);
}

module.exports = router;
