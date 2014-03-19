var mongoose = require('lib/mongoose');
mongoose.set('debug', true);
var async = require('async');

require('mongoose-middleware').initialize(mongoose);
var Competition = require('models/competition').Competition;


async.series([
  open,
  pagianteTest,
  close
], function(err, results) {
  console.log(err);
  disconnect();
  process.exit(err ? 255 : 0);
});

function open (callback) {
  mongoose.connection.on('open', callback);
}

function pagianteTest(callback) {
	var options = {
		start : 5,
		count : 10
	};

	Competition
	    .find()
	    .page(options, function (err, results) {
	    	console.log(results);
	        callback();
	    });
}


function close (callback) {
  disconnect();
}

function disconnect () {
  mongoose.disconnect();
}