const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const user = require("./models/signup");
const router = require('./routes/authRoutes')
const dotenv = require('dotenv').config();

const app = express();
// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.options("*", cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected To MogoDB"))
  .catch((err) => console.error("Failed To Load DataBase", err));

app.use('/', router);

app.listen(process.env.PORT, () => {
  console.log("Server Started Successfully ");
});
