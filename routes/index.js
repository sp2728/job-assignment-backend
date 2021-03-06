var express = require('express');
var router = express.Router();
var userController= require('../controllers/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/chart', userController.getChartData);

router.post('/clickTime', userController.addClickTime);

router.get('/patients', userController.getPatientsData);

router.get('/labels', userController.getLabelData);

module.exports = router;
