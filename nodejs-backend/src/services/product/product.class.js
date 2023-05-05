const { Service } = require("feathers-mongoose");

exports.Product = class Product extends Service {
  constructor(options) {
    super(options);
  }
};
