// See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'supplier';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          // ~cb-read-start~
          {
       supplierId: { type: Number, unique: true },
       companyName: { type: String, required: true },
       contactName: { type: String, required: true },
       email: { type: String, required: true },
       phoneNo: { type: Number, required: true },
       address: { type: String, required: true },
       city: { type: String, required: true },
       state: { type: String, required: true },
       postalcode: { type: Number, required: true },
       country: { type: String, required: true },
       products: { type: Array, required: true },
       minimumOrderQty: { type: Number, required: true },
       username: { type: String, required: true, unique: true, lowercase: true },
       password: { type: String, required: true },
       confirmPassword: { type: String, required: true, unique: true, lowercase: true },

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