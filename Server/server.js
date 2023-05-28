const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const category = require("./models/categories");
const product = require("./models/products");

const app = express();
// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// DataBase & Port initializaton
const port = 5000;
const mongoUrl =
  "mongodb+srv://alixhan5500:Subwoofer143@pushiii.ac4ku5j.mongodb.net/Kfc_db?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl)
  .then(() => console.log("Connected To MogoDB"))
  .catch((err) => console.error("Failed To Load DataBase", err));

app.get("/api/shop", async (req, res) => {
  try {
    const categories = await category.find({});
    const products = await product.find({});

    // Combine the data into a single object or array
    const combinedData = {
      categoriesData: categories,
      productsData: products,
    };
    res.json(combinedData);
  } catch (error) {
    res.status(200).send(error);
  }
});

app.listen(port, () => {
  console.log("Server Started Successfully ");
});
