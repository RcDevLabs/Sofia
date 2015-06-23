var express = require('express');
var router = express.Router();

//entidades
var Users = require('../logic/users');

//var checkToken = require('../logic/_helpers/checkToken');

router.route('/users')
	.get(Users.index)
	.post(Users.create);
router.route('/login')
	.post(Users.login);
	
module.exports = router;