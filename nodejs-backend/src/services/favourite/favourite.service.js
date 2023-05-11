// Initializes the `favourite` service on path `/favourite`
const { Favourite } = require('./favourite.class');
const createModel = require('../../models/favourite.model');
const hooks = require('./favourite.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/favourite', new Favourite(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('favourite');

  service.hooks(hooks);
};
