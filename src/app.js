const express = require("express");
const { adminAuth } = require("./middlewares/auth");

const app = express();

app.use("/admin", adminAuth);

//This rout only handle GET call to /user
app.get("/admin/getAllUser", (req, res) => {
  res.send({ Name: "Hanumanth" });
});
app.get("/admin/delete", (req, res) => {
  res.send("User deleted successfully");
});

app.post("/user", (req, res) => {
  console.log("Perform Data save operations");
  res.send("Data saved successfully");
});

//This will match all the heep method api calls
app.use("/test", (req, res) => {
  res.send("Test path received from server");
});

app.use("/hello", (req, res) => {
  res.send("Hellow path from server");
});

app.use((req, res) => {
  res.send("Hellow from server");
});

app.listen(3000, () => {
  console.log("Server is successfully listening port 3000");
});
