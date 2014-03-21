var mongoose = require('mongoose');
var config = require('config');

require('mongoose-middleware').initialize(mongoose);

mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'));

module.exports = mongoose;