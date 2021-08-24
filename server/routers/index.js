const router = require('express').Router();
const controllers = require('../controllers/index.js');

router.get('/login', controllers.loginPage);
router.get('/genres', controllers.getGenres);

module.exports = router;