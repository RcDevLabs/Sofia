module.exports = function(req, res, next){
	if ('OPTIONS' == req.method) {
      console.log("Requested OPTIONS, let us attend.");
      res.status(200).json({msg: "OK"});
    }
    else {
    	console.log("Not options. Method: ", req.method);
      next();
    }
};