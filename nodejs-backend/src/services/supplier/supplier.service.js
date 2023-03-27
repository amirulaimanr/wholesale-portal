const { Supplier } = require('./supplier.class');
const createModel = require('../../models/supplier.model');
const hooks = require('./supplier.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/supplier', new Supplier(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('supplier');

  service.hooks(hooks);
};