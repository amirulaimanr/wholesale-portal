const { Supplier } = require("./supplier.class");
const createModel = require("../../models/supplier.model");
const hooks = require("./supplier.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/supplier", new Supplier(options, app));

  app.get("/supplier/:userId", async (req, res) => {
    try {
      const supplier = await Supplier.findOne({ userId: req.params.userId });
      if (!supplier) {
        return res.status(404).json({ error: "Supplier not found" });
      }
      res.json({ supplierId: supplier._id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Get our initialized service so that we can register hooks
  const service = app.service("supplier");

  service.hooks(hooks);
};
