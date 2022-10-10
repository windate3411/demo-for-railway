const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.json({
    name: "Danny",
    id: 9831032,
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Express server start");
});
