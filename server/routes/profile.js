var User = require('models/user').User;

exports.get = function(req, res) {
  res.send({
  	success: true
  });
};

exports.post = function(req, res) {
  	User.updateUser(req.body, function(err, data)	{
  		res.send({success: err === null});
  	});
};