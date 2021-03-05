const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
      expires: Date,
      cost: {
        type: Number,
      }
    }],
    date: {
      type: Date,
      default: Date.now(),
    }
  });

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;
