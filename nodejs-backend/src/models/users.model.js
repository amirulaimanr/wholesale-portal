// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "users";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    // ~cb-read-start~
    {
      selectedCountry: {
        name: { type: String },
        code: { type: String },
      },
      role: { type: String, enum: ["Buyer", "Supplier"] },
      name: { type: String },
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
      },
      companyName: { type: String },
      phoneNo: { type: String },
      password: { type: String },
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
