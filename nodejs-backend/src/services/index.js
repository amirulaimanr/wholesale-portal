const users = require("./users/users.service.js");
const homepage = require("./homepage/homepage.service.js");
const product = require("./product/product.service.js");
const supplier = require("./supplier/supplier.service.js");
const buyer = require("./buyer/buyer.service.js");
const profile = require("./profile/profile.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  // ~cb-add-configure-service-name~
  app.configure(homepage);
  app.configure(product);
  app.configure(supplier);
  app.configure(buyer);
  app.configure(profile);
};
