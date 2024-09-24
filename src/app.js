const express = require("express");
const { connectDB } = require("./config/database");
const User = require("./models/user");
const app = express();

app.post("/signUp", async (req, res) => {
  const user = new User({
    firstName: "Hanumanth",
    LastName: "Ch",
    emainId: "Hanu@ch.com",
    Password: "Hanu@12345",
  });
  try {
    await user.save();
    res.send("User Saved Successfully");
  } catch (err) {
    res.send("Error While Saving Uder detials", err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database Connection Established......");
    app.listen(3000, () => {
      console.log("Server is successfully listening port 3000");
    });
  })
  .catch((err) => {
    console.log("Database Connection NOT Established......");
  });
