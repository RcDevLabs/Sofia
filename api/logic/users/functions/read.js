var Model = require('../model');

module.exports = function(req, res){
	var id = req.params.id;
	Model.findById({_id: id})
		.populate('profileModel')
		.exec(function(err, data){
		if(err)
			return res.status(500).json({err: err})
		if(data)
			return res.json({data: data})
	});
}