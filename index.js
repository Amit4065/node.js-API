
const express = require("express");
const mongoose = require("mongoose");

const router = require("./routes/course");

mongoose.connect("mongodb://0.0.0.0:27017/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

const app = express();
const port = process.env.PORT || 2000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log("Connected");
});