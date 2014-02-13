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

schema.statics.createCompetition = function(competition, callback)  {
  var Competition = this;

  Competition.create(competition, callback);
}

exports.Competition = mongoose.model('Competition', schema);