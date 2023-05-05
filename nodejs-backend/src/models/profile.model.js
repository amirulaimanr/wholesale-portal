// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const mongoose = require("mongoose");

module.exports = function (app) {
  const modelName = "profile";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    // ~cb-read-start~
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
      profileImg: {
        type: String,
      },
      companyWebsite: {
        type: String,
      },
      address: {
        type: String,
      },
      // city: {
      //   type: String,
      // },
      // state: {
      //   type: String,
      // },
      // postcode: {
      //   type: String,
      // },
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
