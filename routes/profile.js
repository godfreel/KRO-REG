var User = require('models/user').User;

exports.get = function(req, res) {
  res.render('profile');
};

exports.post = function(req, res) {
	console.log(req.body);
  	console.log(req.body.sichip);

  	User.updateUser(req.body, function(err, data)	{
  		console.log(data);

  		res.send({success: err === null});
  	});
};