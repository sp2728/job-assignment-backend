var express = require('express');
var router = express.Router();
var userController= require('../controllers/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', userController.addUser);

router.post('/login', userController.authenticateUser);

module.exports = router;
