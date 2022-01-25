const express = require("express");
const res = require("express/lib/response");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("El servidor está corriendo");
});

app.get("/", () => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});
