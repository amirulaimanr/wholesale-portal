// Initializes the `product` service on path `/product`
const { Product } = require("./product.class");
const createModel = require("../../models/product.model");
const hooks = require("./product.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/product", new Product(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("product");

  service.hooks(hooks);

  // // Add a new route for creating products
  // app.post("/product/add", async (req, res) => {
  //   try {
  //     const product = await app.service("product").create(req.body);
  //     res.status(201).json(product);
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json({ error: "Failed to create product" });
  //   }
  // });
};
