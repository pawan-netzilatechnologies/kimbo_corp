const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
let app = express();

app.use(express.static("public"));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.get("/", function (req, res) {
  res.sendFile("index.html", { root: path.join(__dirname, "/public") });
});

// mongoose.connect('mongodb://localhost:27017/kimbo', { useNewUrlParser: true, useUnifiedTopology: true });

app.use("/api", require("./API/index"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: path.join(__dirname, "/public") });
});

const port = 8010;
app.listen(port, () => {
  console.log("*** Server Online @ localhost:" + port + " ***");
});
