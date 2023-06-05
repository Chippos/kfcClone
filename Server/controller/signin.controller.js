const user = require("../models/signup");

const signupController = async (req, res) => {
    const { email, password } = req.body;
  const providePassword = password;

  try {
    const emailCheck = await user.find({ email });
    let error = "Please provide a valid email address and password.";
    if (emailCheck.length > 0) {
      // const {email , password} = check;
      const [{ cpassowrd, email, password, username, _id }] = emailCheck;
      const data = {
        id: _id,
        email: email,
        password: password,
        cpassowrd: cpassowrd,
        username: username,
      };
      const passwordMatch = password === providePassword;
      if (passwordMatch) {
        res.json(data);
      } else {
        res.json({ error });
      }
    } else {
      res.send({ error });
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = signupController;