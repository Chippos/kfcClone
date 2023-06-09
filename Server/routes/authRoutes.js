const express = require("express");
const router = express.Router();
const cors = require("cors");
const {shop, singUp, signIn, order, findById} = require('../controller')
// middleware
router.use(
  cors({
    credentials: true,
    // origin: "http://localhost:5173",
  })
);

router.get('/api/shop', shop)
router.get('/api/shop/:id', findById)
router.post('/api/signup', singUp)
router.post('/api/login', signIn)
router.post('/api/checkout', order);



module.exports = router;