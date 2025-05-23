const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://pranathnaik12:u9W6azcvo9X3fW3L@learnmongodb.vrewz.mongodb.net/?retryWrites=true&w=majority&appName=learnmongodb"
  );
};

module.exports = connectDB;
