let router = require('express').Router();
let apiRoutes = require('./api');
let htmlRoutes = require('./html');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

module.exports = router;
