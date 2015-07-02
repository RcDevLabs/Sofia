var Model = require('../model');

module.exports = function(req, res){
	var data = new Model({
		username: req.body.username,
		password: req.body.password,
		usrLvl: req.body.usrLvl
	});
	data.save(function(err) {
		if (err)
			if(err.code == 11000) {
				return res.status(403).json({err: "Erro: Usuário já existente. Tente outro nome"})
			} else {
				return res.status(500).json({err: err});
			}
		res.json({ message: 'Novo Usuário', data: data });
	});
};