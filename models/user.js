var crypto = require('crypto');
var async = require('async');
var util = require('util');

var mongoose = require('lib/mongoose'),
  Schema = mongoose.Schema;

  mongoose.set('debug', true);

var schema = new Schema({
  login: {
    type: String,
    unique: true,
    required: true
  },
  firstname: {
    type: String,
    unique: true,
    required: false
  },
  lastname: {
    type: String,
    unique: true,
    required: false
  },
  
  club: {
    type: String,
    unique: true,
    required: false
  },
  role: {
    type: String,
    unique: true,
    required: false
  },
  rank: {
    type: String,
    unique: true,
    required: false
  },
  birthday: {
    type: Date,
     default: Date.now
  },
  sichip: {
    type: String,
    unique: true,
    required: false
  },
  hashedPassword: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

schema.methods.encryptPassword = function(password) {
  return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

schema.virtual('password')
  .set(function(password) {
    this._plainPassword = password;
    this.salt = Math.random() + '';
    this.hashedPassword = this.encryptPassword(password);
  })
  .get(function() { return this._plainPassword; });

schema.statics.updateUser = function(user, callback)  {

  console.log(user);

  var query = {login: user.login};
	User.findOneAndUpdate(query, 
                        { 
                          sichip: user.sichip, 
                          firstname:user.firstname, 
                          lastname:user.lastname
                        },
                        function(err, user)  {
                          console.log(arguments);
                        });

}

schema.methods.checkPassword = function(password) {
  return this.encryptPassword(password) === this.hashedPassword;
};

schema.statics.authorize = function(login, password, callback) {

  async.waterfall([
      function(callback)  {login
        User.findOne({login: login}, callback);
      },
      function(user, callback)  {
        if(user) {
          if(user.checkPassword(password)) {
            callback(null, user);
          } else {
            callback(new AuthError("Wrong Password"));
          }
        } else {
          var user = new User({login: login, password: password});
          user.save(function(err) {
            if(err) return callback(err);
            callback(null, user);
        });
        }
      }
      ], callback);
};

var User = exports.User = mongoose.model('User', schema);

function AuthError (message) {
  Error.apply(this, arguments);
  Error.captureStackTrace(this, AuthError);

  this.message = message;
}

util.inherits(AuthError, Error);
AuthError.prototype.name = 'AuthError';
exports.AuthError = AuthError;