const path = require('path');
const isAuthenticated = require('../../config/middleware/isAuthenticated');
const router = require('express').Router();

router.get('/', (req, res) => {
  if (req.user) {
    res.redirect('/members');
  }
  res.sendFile(path.join(__dirname, '../../public/signup.html'));
});

router.get('/login', (req, res) => {
  if (req.user) {
    res.redirect('/members');
  }
  res.sendFile(path.join(__dirname, '../../public/login.html'));
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/members', isAuthenticated, (_req, res) => {
  res.sendFile(path.join(__dirname, '../../public/members.html'));
});

module.exports = router;
