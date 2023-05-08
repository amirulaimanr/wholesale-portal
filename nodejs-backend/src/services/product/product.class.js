const { Service } = require("feathers-mongoose");

exports.Product = class Product extends Service {
  constructor(options) {
    super(options);
  }

  // async searchProducts(params) {
  //   const { query } = params;

  //   // Implement search logic here
  //   const searchQuery = { name: { $regex: `^${query.search}`, $options: "i" } };
  //   const results = await this.Model.find(searchQuery).exec();

  //   return results;
  // }
};
