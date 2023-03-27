// See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'buyer';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          // ~cb-read-start~
          {
       buyerId: { type: Number, required: true, unique: true },
       name: { type: String, required: true },
       email: { type: String, required: true },
       phoneNo: { type: Number, required: true },
       address: { type: String, required: true },
       city: { type: String, required: true },
       state: { type: String, required: true },
       postalcode: { type: Number },
       country: { type: String, required: true },
       companyName: { type: String },
       companyType: { type: String },
       username: { type: String, required: true, unique: true, lowercase: true },
       password: { type: String, required: true },
       confirmPassword: { type: String, required: true },

    }
          // ~cb-read-end~
          , 
          {
          timestamps: true
        });
      
        // This is necessary to avoid model compilation errors in watch mode
        // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };