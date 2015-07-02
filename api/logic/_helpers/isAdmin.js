var cfg = require('../../../config.json').development;

module.exports = function(req, res, next){
	var user = req.user;
	if(user.usrLvl == cfg.usrLvl.admin){
		return 	next();
	} else {
		return res.status(403).json({
			err: "Erro: Não autorizado. Usuário não tem permissões para efetuar ação."
		})
	}
};