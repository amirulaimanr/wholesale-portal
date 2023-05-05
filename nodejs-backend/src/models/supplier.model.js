// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const mongoose = require("mongoose");

module.exports = function (app) {
  const modelName = "supplier";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    // ~cb-read-start~
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
      name: {
        type: String,
      },
      type: {
        type: String,
      },
      businessType: {
        type: String,
      },
      employees: {
        type: Number,
      },
      logo: {
        type: String,
      },
      leadTime: {
        type: String,
        required: true,
      },
      paymentTerms: {
        type: String,
        required: true,
      },
      yearEstablished: {
        type: Number,
      },
      country: {
        type: String,
      },
      verified: {
        type: Boolean,
      },
      responseTime: {
        type: String,
      },
      about: {
        type: String,
      },
      address: {
        type: String,
      },
      website: {
        type: String,
      },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
    },
    // ~cb-read-end~
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
