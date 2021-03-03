const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/ctrlBudget"
);

const budgetSeed = [
  {
    type: "Utilities",
    title: "Gas",
    quantity: 1,
    user: "1",
    expires: "04/04/2021",
    cost: 500,
    date: new Date(Date.now())
  },
  {
    type: "Groceries",
    title: "Pepino",
    quantity: 3,
    user: "1",
    expires: "04/05/2021",
    cost: 200,
    date: new Date(Date.now())
  },
  {
    type: "Utilities",
    title: "Gas",
    quantity: 1,
    user: "1",
    expires: "04/04/2021",
    cost: 500,
    date: new Date(Date.now())
  },
  {
    type: "Utilities",
    title: "Gas",
    quantity: 1,
    user: "1",
    expires: "04/04/2021",
    cost: 500,
    date: new Date(Date.now())
  },
  {
    type: "Utilities",
    title: "Gas",
    quantity: 1,
    user: "1",
    expires: "04/04/2021",
    cost: 500,
    date: new Date(Date.now())
  },
  {
    type: "Utilities",
    title: "Gas",
    quantity: 1,
    user: "1",
    expires: "04/04/2021",
    cost: 500,
    date: new Date(Date.now())
  },
  {
    type: "Utilities",
    title: "Gas",
    quantity: 1,
    user: "1",
    expires: "04/04/2021",
    cost: 500,
    date: new Date(Date.now())
  },
  {
    type: "Utilities",
    title: "Gas",
    quantity: 1,
    user: "1",
    expires: "04/04/2021",
    cost: 500,
    date: new Date(Date.now())
  },
  {
    type: "Utilities",
    title: "Gas",
    quantity: 1,
    user: "1",
    expires: "04/04/2021",
    cost: 500,
    date: new Date(Date.now())
  },
  {
    type: "Utilities",
    title: "Gas",
    quantity: 1,
    user: "1",
    expires: "04/04/2021",
    cost: 500,
    date: new Date(Date.now())
  },
  {
    type: "Utilities",
    title: "Gas",
    quantity: 1,
    user: "1",
    expires: "04/04/2021",
    cost: 500,
    date: new Date(Date.now())
  },
  {
    type: "Utilities",
    title: "Gas",
    quantity: 1,
    user: "1",
    expires: "04/04/2021",
    cost: 500,
    date: new Date(Date.now())
  },
  {
    type: "Utilities",
    title: "Gas",
    quantity: 1,
    user: "1",
    expires: "04/04/2021",
    cost: 500,
    date: new Date(Date.now())
  },
  {
    type: "Utilities",
    title: "Gas",
    quantity: 1,
    user: "1",
    expires: "04/04/2021",
    cost: 500,
    date: new Date(Date.now())
  },
  {
    type: "Utilities",
    title: "Gas",
    quantity: 1,
    user: "1",
    expires: "04/04/2021",
    cost: 500,
    date: new Date(Date.now())
  },
  {
    type: "Utilities",
    title: "Gas",
    quantity: 1,
    user: "1",
    expires: "04/04/2021",
    cost: 500,
    date: new Date(Date.now())
  }
];

db.Budget
  .remove({})
  .then(() => db.Budget.collection.insertMany(budgetSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
