const express = require("express");

const app = express();

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
