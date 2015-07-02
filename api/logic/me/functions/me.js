module.exports = function(req, res){
	if(!req.user){
		return res.json({me: null, msg: "Visitante. Nenhum usuário logado."});	
	}
	return res.json({me: req.user});
}