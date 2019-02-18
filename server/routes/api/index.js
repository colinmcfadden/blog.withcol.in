const router = require('express').Router();

router.use('/article', require('./article'));

module.exports = router;