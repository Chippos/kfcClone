const user = require("../models/signup");

const signupController = async (req, res) => {
  const { username, email, password, cpassowrd } = req.body;
  const data = {
    username: username,
    email: email,
    password: password,
    cpassowrd: cpassowrd,
  };

  try {
    const check = await user.findOne({ email: email });
    if (check) {
      return res.json({
         error: "This Email Is Already Taken"
      })
      // res.json(error);
    } else {
      await user.insertMany([data]);
      return res.json({
        success : "Successfully Signup"
     })
      // res.send("notExisted");
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = signupController;
