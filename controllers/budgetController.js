const db = require("../models");

// Defining methods for the budgetController
module.exports = {
  findAll: function(req, res) {
    db.Budget
      .find({user: "juan"})
      // .addFields({ 
      //   totalExpenses: { $sum: "$expenses.cost" }
      //    })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findThat: function(req, res) {
    console.log("hahaha")
    db.Budget
      .find({user: "rafa"})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Budget
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Budget
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log(req.params.id, "update")
    console.log(req.body, "update")
    db.Budget
      .findOneAndUpdate({ user: req.params.id },
        {
          $push: { expenses: req.body },
        },
        { new: true, runValidators: true })
      .then(dbModel => {
        console.log(dbModel, "after update")
        res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Budget
      .findOneAndUpdate({ user: req.params.id } ,{$pull: { expenses: { _id: req.params.id }}})
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
