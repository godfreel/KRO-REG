var mongoose = require('lib/mongoose');
mongoose.set('debug', true);
var async = require('async');


async.series([
  open,
  dropDatabase,
  requireModelIndexes,
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
  db.dropDatabase(callback);
}

function requireModelIndexes (callback) {
  require('models/user');

  async.each(Object.keys(mongoose.models), function(modelName, callback)  {
    mongoose.models[modelName].ensureIndexes(callback);
  }, callback);
}

function createUsers (callback) {
  var User = require('models/user').User;
  var users = [
    {username: 'admin1', password: 'pass'},
    {username: 'admin2', password: 'pass'},
    {username: 'admin3', password: 'pass'}
  ];

  async.each(users, function(userData, callback) {
    var user = new User(userData);
    user.save(callback);
  }, callback);
}

function close (callback) {
  disconnect();
}

function disconnect () {
  mongoose.disconnect();
}