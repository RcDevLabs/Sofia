var express = require('express');
var router = express.Router();

//entidades
var Users = require('../logic/users');
var UserProfile = require('../logic/userProfiles');

// helpers
var checkJWT = require('../logic/_helpers/checkJWT');
var isAdmin = require('../logic/_helpers/isAdmin');

router.route('/users')
	.get(checkJWT, isAdmin, Users.index)
	.post(Users.create);
router.route('/user/:id')
	.get(checkJWT, isAdmin, Users.read);
router.route('/profile/:id')
	.post(UserProfile.create)
	.get(UserProfile.read);
router.route('/login')
	.post(Users.login);

module.exports = router;