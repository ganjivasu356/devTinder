const mongoose = require("mongoose");

//This will return promise
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://namastheDev:oHSEd2QvKTdxvsZS@namasthenode.gju1v.mongodb.net/devTinder"
  );
};

module.exports = { connectDB };
