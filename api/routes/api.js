var express = require('express');
var router = express.Router();

//entidades
var Users = require('../logic/users');
var checkJWT = require('../logic/_helpers/checkJWT');

router.route('/users')
	.get(checkJWT, Users.index)
	.post(Users.create);
router.route('/login')
	.post(Users.login);

module.exports = router;