var Competition = require('models/competition').Competition;

exports.get = function(req, res) {
  res.render('competitions');
};

exports.list = function(req, res)	{

};

exports.post = function(req, res)	{
	console.log(req.body);
	Competition.createCompetition(req.body, function(err, data)	{
		console.log(arguments);
  		res.send({success: err === null});
  	});
}