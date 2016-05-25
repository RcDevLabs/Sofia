var cfg = require('../../../config.json').development;

module.exports = function(role){
  return function(req, res, next){
    if (!req.user) return false;
    var user = req.user;
    if(user.usrLvl == cfg.usrLvl[role]){
      return 	next();
    } else {
      return res.status(403).json({
        err: "Erro: Não autorizado. Usuário não tem permissões para efetuar ação."
      })
    }
  }
};
