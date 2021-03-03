const router = require("express").Router();
const budgetController = require("../../controllers/budgetController");

// Matches with "/api/budget"
router.route("/")
  .get(budgetController.findAll)
  .post(budgetController.create);

// Matches with "/api/budget/:id"
router
  .route("/:id")
  .get(budgetController.findById)
  .put(budgetController.update)
  .delete(budgetController.remove);

module.exports = router;
