require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("CONNECTED SUCCESSFULLY");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
  });
