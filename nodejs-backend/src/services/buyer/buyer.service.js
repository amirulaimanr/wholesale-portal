const { Buyer } = require('./buyer.class');
const createModel = require('../../models/buyer.model');
const hooks = require('./buyer.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/buyer', new Buyer(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('buyer');

  service.hooks(hooks);
};