var model = require('../users/model')
	, jwt = require('jwt-simple');
	var segredo = require('../../../config').development.secret;

module.exports = function(req, res, next) {
  var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
//1
  if (token) {
  try {
    var decoded = jwt.decode(token, segredo);
 		console.dir('decodando ', decoded);
   //2
    if (decoded.exp <= Date.now()) {
		  return res.status(400).json({error: 'Acesso Expirado, faça login novamente'});
		}
		//3
		model.findOne({ _id: decoded.iss }, function(err, user) {
  		if(err) {
  			return res.status(500).json({
          msg: "erro ao procurar usuario do token."
        });
      }
  	 	req.user = user;
			return next();
		});
 	//4
  } catch (err) {
    return res.status(401).json({
      msg: 'Erro: Seu token é inválido'
    });
  }
} else {
	return res.status(401).json({
    msg: 'Token não encontrado ou informado'
  });
}
};