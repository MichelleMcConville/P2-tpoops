const router = require('express').Router();
const db = require('../../models');
const passport = require('../../config/passport');
const itemController = require('../../controllers/itemController');
const userController = require('../../controllers/userController');

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({
    email: req.user.email,
    id: req.user.id
  });
});

router.post('/signup', (req, res) => {
  db.User.create(req.body)
    .then(() => {
      res.redirect(307, '/api/login');
    })
    .catch(err => {
      res.status(401).json(err);
    });
});

router.get('/user_data', (req, res) => {
  if (!req.user) {
    return res.json({});
  }
  const { password, ...user } = req.user;
  res.json(user);
});

// router.get('/user', userController.getUsers);

// router.post('/user', userController.createUser);

router.put('/user/:id', (req, res) => {
  userController.updateUser(req, res);
});

router.delete('/user/:id', (req, res) => {
  userController.deleteUser(req, res);
});

router.get('/items', itemController.getItems);

router.post('/items', itemController.createItem);

router.put('/items/:id', (req, res) => {
  itemController.updateItem(req, res);
});

router.delete('/items/:id', (req, res) => {
  itemController.deleteItem(req, res);
});

module.exports = router;
