var Model = require("../model");

module.exports = function(req, res){
	Model.find(function(err, data){
		if(err)
			res.json({err: err})
		res.json({data: data});
	})
} 