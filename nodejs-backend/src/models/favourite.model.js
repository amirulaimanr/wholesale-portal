module.exports = function (app) {
  const modelName = "favourite";
  const mongoose = require("mongoose");
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema({
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    buyerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "buyer",
    },
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
