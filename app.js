const express = require("express");
const app = express();
const indexRoute = require("./routes/index");

// Database Connection
require("./config/dbConfig");

// Port
const PORT = process.env.PORT || 5000;

app.use("/", indexRoute);

app.listen(PORT, (req, res) => {
  console.log("SERVER LISTENING ON PORT " + PORT);
});

module.exports = app;
