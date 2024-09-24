const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://namastheDev:oHSEd2QvKTdxvsZS@namasthenode.gju1v.mongodb.net/"
  );
};

connectDB()
  .then(() => {
    console.log("Database Connection Established......");
  })
  .catch((err) => {
    console.log("Database Connection NOT Established......");
  });
