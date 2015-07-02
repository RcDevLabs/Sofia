var Model = require("../model");

module.exports = function(req, res){
	Model.find(function(err, data){
		if(err)
			return res.status(500).json({err: err})
		res.json({data: data});
	})
} 