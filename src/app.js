const express = require("express");
const { connectDB } = require("./config/database");
const User = require("./models/user");
const app = express();

//This Middelware convert json to javascript object format
app.use(express.json());

app.post("/signUp", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User Saved Successfully");
  } catch (err) {
    res.send("Error While Saving Uder detials", err.message);
  }
});

app.get("/getUser", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const user = await User.find({ emailId: userEmail });
    res.send(user);
  } catch (err) {
    res.status(404).send("Invalid user details");
  }
});

//Get all the users from the DB
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(404).send("Invalid user details");
  }
});

//DELETE users from the DB
app.delete("/delete", async (req, res) => {
  const userID = req.body.userID;
  try {
    await User.findByIdAndDelete(userID);
    res.send("User Deleted Successfully");
  } catch (err) {
    res.status(404).send("Invalid user details");
  }
});

//Update users details in the DB
app.patch("/update", async (req, res) => {
  const userID = req.body.userID;
  const data = req.body;
  try {
    await User.findByIdAndUpdate(userID, data);
    res.send("User Details Updated Successfully");
  } catch (err) {
    res.status(404).send("Invalid user details");
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
