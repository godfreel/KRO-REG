var mongoose = require('lib/mongoose');
mongoose.set('debug', true);
var async = require('async');

async.series([
  open,
//  dropDatabase,
//  requireModelIndexes,
  createUsers,
  close
], function(err, results) {
  console.log(arguments);
  disconnect();
  process.exit(err ? 255 : 0);
});

function open (callback) {
  mongoose.connection.on('open', callback);
}

function dropDatabase (callback) {
  var db = mongoose.connection.db;
  var collection = db.collection('users');
  collection.drop();

  callback();
}

function requireModelIndexes (callback) {
  require('models/user');

  async.each(Object.keys(mongoose.models), function(modelName, callback)  {
    mongoose.models[modelName].ensureIndexes(callback);
  }, callback);
}

function createUsers (callback) {
  var Competition = require('models/competition').Competition;
  var users = [
    {
      name: "Соревнование 1",
      date: Date.now(),
      place: "Grodno",
      competitionClubOwner: "Kronan",
      description: "Описание " + 1
    },
    {
      name: "Соревнование 2",
      date: Date.now(),
      place: "Grodno",
      competitionClubOwner: "Kronan",
      description: "Описание " + 2
    },
    {
      name: "Соревнование 3",
      date: Date.now(),
      place: "Grodno",
      competitionClubOwner: "Kronan",
      description: "Описание " + 3
    }
  ];

  async.each(users, function(userData, callback) {
    var user = new Competition(userData);
    user.save(callback);
  }, callback);
}

function close (callback) {
  disconnect();
}

function disconnect () {
  mongoose.disconnect();
}