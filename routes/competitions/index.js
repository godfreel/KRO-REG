var Competition = require('models/competition').Competition;
var log = require('lib/log')(module);

exports.get = function(req, res) {
	Competition.paginate(req.query, function(err, data)	{
		res.send(data.results);
	});
};

exports.post = function(req, res)	{
	log(req.body);
	Competition.createCompetition(req.body, function(err, data)	{
  		res.send({success: err === null});
  	});
}