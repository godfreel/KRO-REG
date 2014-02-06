var mongoose = require('lib/mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  competitionClubOwner: {
    type: String,
    required: true
  }
});

var Competition = exports.Competition = mongoose.model('Competition', schema);