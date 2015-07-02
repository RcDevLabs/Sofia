var Model = require('../model');

module.exports = function(req, res, next){
	var id = req.params.id; //profile id here

	Model.findById({_id: id})
		.populate('userModel')
		.exec(function(err, data){
		if(err)
			return res.status(500).json({err: err})
		if(data)
			return res.json({data: data})
	});

}