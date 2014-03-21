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
  place: {
    type: String,
    required: true
  },
  competitionClubOwner: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

schema.statics.createCompetition = function(cmp, callback)  {
  var Competition = this;

  Competition.create(cmp, callback);
};

schema.statics.paginate = function(options, callback)  {
  var Competition = this;

  Competition
      .find()
      .page(options, function (err, results) {
        callback(null, results);
      });
};

exports.Competition = mongoose.model('Competition', schema);