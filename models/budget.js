const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  quantity: { type: Number, default: 1 },
  user: Number,
  expires: Date,
  cost: Number,
  date: { type: Date, default: Date.now }
});

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;
