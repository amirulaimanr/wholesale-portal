const { authenticate } = require("@feathersjs/authentication").hooks;
const { populate } = require("feathers-hooks-common");

const supplierProductsSchema = {
  include: {
    service: "product",
    nameAs: "product",
    parentField: "_id",
    childField: "supplierId",
  },
};

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [populate({ schema: supplierProductsSchema })],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
