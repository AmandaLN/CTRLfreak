const router = require("express").Router();
const budgetRoutes = require("./budget");

// Budget routes
router.use("/budget", budgetRoutes);

module.exports = router;
