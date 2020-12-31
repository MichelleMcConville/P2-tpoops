let db = require('../models');
let userController = {
  createUser: (req, res) => {
    db.User.create(req.body).then((results) => res.json(results));
  },
  
  getUser: (req, res) => {
    db.User.findAll().then((results) => res.json(results));
  },

  updateUser: (req, res) => {
    db.User.update(req.body, { where: { id: req.params.id }
    }).then((results) => res.json(results));
  },

  deleteUser: (req, res) => {
    db.User.destroy(req.body, { where: { id: req.params.id }
    }).then((results) => res.json(results));
  }
};

module.exports = userController;
