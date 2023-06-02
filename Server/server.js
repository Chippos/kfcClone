const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const category = require("./models/categories");
const product = require("./models/products");
const user = require("./models/signup");


const app = express();
// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.options('*', cors());

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

app.post("/api/signup", async (req, res) => {
    const { username, email, password, cpassowrd } = req.body;
    const data= {
      username: username,
      email: email,
      password: password,
      cpassowrd: cpassowrd,
    }

    try{
      const check = await user.findOne({email: email})
      if(check){
        res.json("existed")
      }else{
        res.json("notExisted")
        await user.insertMany([data])
        res.send("notExisted")
      }
    }catch(e){
      console.log(e)
    }
});
app.get("/api/login", async (req, res) => {
  const { username, email, password, cpassowrd } = req.body;
  const data= {
    username: username,
    email: email,
    password: password,
    cpassowrd: cpassowrd,
  }

  try{
    const check = await user.findOne({email: email})
    if(check){
      res.json("existed")
    }else{
      res.json("notExisted")
      await user.insertMany([data])
      res.send("notExisted")
    }
  }catch(e){
    console.log(e)
  }
});

app.listen(port, () => {
  console.log("Server Started Successfully ");
});
