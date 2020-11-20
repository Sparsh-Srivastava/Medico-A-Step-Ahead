const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/medical", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));
