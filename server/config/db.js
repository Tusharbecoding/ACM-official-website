const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongo_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
      replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
