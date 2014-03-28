var checkAuth = require('middleware/checkAuth');

module.exports = function(app) {

  app.get('/', require('./frontpage').get);

  app.get('/profile', require('./profile').get);
  app.post('/updateProfile', require('./profile').post);
  
  app.post('/login', require('./login').post);

  app.post('/logout', require('./logout').post);

  app.get('/competitions', require('./competitions').get);
  app.get('/competition', require('./competitions').getOne);
  app.post('/createCompetition', require('./competitions').post);
};
