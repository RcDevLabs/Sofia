var Model = require('../model');

module.exports = function(req, res){
	if(req.params.userid == null) {
		return res.status(502).json({msg: 'Bad Request. Missing :userid at /profile/:userid'})
	} else {
		var data = new Model({
			userModel: req.params.id //User's ID here
			, name: req.body.name
			,	email: req.body.email
			, birthday: req.body.birthday
		});
		data.save(function(err) {
			if (err)
				return res.status(500).json({err: err});
			res.json({ message: 'Novo Perfil', data: data });
		});
	}
};