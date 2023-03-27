// Initializes the `homepage` service on path `/`
const { Homepage } = require("./homepage.class");
const createModel = require("../../models/homepage.model");
const hooks = require("./homepage.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/", new Homepage(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("");

  service.hooks(hooks);
};
