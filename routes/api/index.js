const router = require("express").Router();
const budgetRoutes = require("./budget");
const userRoutes = require("./users");

// Budget routes
router.use("/budget", budgetRoutes);
router.use("/users", userRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });


module.exports = router;
