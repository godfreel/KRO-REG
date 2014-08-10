var checkAuth = require('./../middleware/checkAuth');

var cmpRouting = require('./competitions');

module.exports = function(app) {

  app.get('/', require('./frontpage').get);

  app.get('/profile', require('./profile').get);
  app.post('/updateProfile', require('./profile').post);
  
  app.post('/login', require('./login').post);

  app.post('/logout', require('./logout').post);


//competitions mapping
  app.get('/competitions', cmpRouting.get);
  app.get('/competition', cmpRouting.getOne);
  app.get('/cmpCount', cmpRouting.count);
  app.post('/createCompetition', cmpRouting.post);
};
