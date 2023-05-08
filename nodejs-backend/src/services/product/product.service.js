// Initializes the `product` service on path `/product`
const { Product } = require("./product.class");
const { Router } = require("@feathersjs/express");
const createModel = require("../../models/product.model");
const hooks = require("./product.hooks");
const router = Router();

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/product", new Product(options, app));

  const service = app.service("product");

  service.hooks(hooks);
};
