//
const db = require("../models");
const itemController = {
  createItem: function(req, res) {
    db.Item.create(req.body).then(function(results) {
      res.json(results);
    });
  },
  getItems: function(req, res) {
    db.Item.findAll().then(function(results) {
      res.json(results);
    });
  },
  updateItem: function(req, res) {
    db.Item.update({
      where: {
        id: req.params.id,
      },
    }).then(function(results) {
      res.json(results);
    });
  },
  deleteItem: function(req, res) {
    db.Item.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function(results) {
      res.json(results);
    });
  },
};

module.exports = itemController;
