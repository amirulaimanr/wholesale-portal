// product-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const mongoose = require("mongoose");

module.exports = function (app) {
  const modelName = "product";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      supplierId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "supplier",
      },
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
      },
      name: {
        type: String,
      },
      unit: {
        type: String,
      },
      description: {
        type: String,
      },
      category: {
        type: String,
      },
      subCategory: {
        type: String,
      },
      price: {
        type: Number,
      },
      qty: {
        type: Number,
      },
      image: {
        type: String,
      },
      minOrderQuantity: {
        type: Number,
      },
      rto: {
        type: Boolean,
      },
      model: {
        type: String,
      },
      brand: {
        type: String,
      },
      origin: {
        type: String,
      },
      smallOrder: {
        type: Boolean,
      },
    },

    {
      timestamps: true,
    }
  );
  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
