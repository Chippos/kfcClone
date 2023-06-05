const express = require("express");
const router = express.Router();
const cors = require("cors");
const {shop, singUp, signIn} = require('../controller')
// middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get('/api/shop', shop)
router.post('/api/signup', singUp)
router.post('/api/login', signIn)



module.exports = router;