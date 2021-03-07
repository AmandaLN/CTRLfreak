const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// related to account how?
/**
 * date????
 * -- date that the budge is created
 * 1) do new budgets supersede old budgets?
 * 2) if no, do you query all budgets, how determine conflicts between budgets
 * 3) if yes, do you completely ignore previous budgets, or import line items to new budget
 * 4) way to track expired AND recurring expenses
 */
const budgetSchema = new Schema({
  user: String,
  expenses: [
    {
      title: {
        type: String,
        trim: true,
        required: "Title is required",
      },
      type: {
        type: String,
        trim: true,
        required: "Type of expense is required",
      },
      quantity: {
        type: Number,
        default: 1
      },
      expires: {
        type: Date,
        required: "Title is required",
      },
      cost: {
        type: Number,
      },
      createAt: {
        type: Date,
        default: Date.now(),
      }
    }],
    createAt: {
      type: Date,
      default: Date.now(),
    }
  });

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;
