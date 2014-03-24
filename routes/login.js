var User = require('models/user').User;
var HttpError = require('error').HttpError;
var AuthError = require('models/user').AuthError;
var async = require('async');

exports.post = function(req, res, next)	{
	var login = req.body.login,
		password = req.body.password;

	User.authorize(login, password, function(err, user)	{
		if(err) {
			if(err instanceof AuthError)	{
				return next(new HttpError(403, err.message));
			} else {
				return next(err);
			}
		}

		res.send({success: true, data: user});
	});
};