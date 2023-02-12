const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const User = require("../models/user");

loginRouter.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;

    /**
     * geting the user from database for login
     */
    const user = await User.findOne({ username });

    /**
     * If user is not null then we compare the passwordHash of that user with the requested password
     */
    const passwordCorrect =
      user === null ? false : await bcrypt.compare(password, user.passwordHash);

    /**
     * if no user found from database or password added by the user is not matched with the existing user passwordHash
     * then it returns error
     */
    if (!(user && passwordCorrect)) {
      return res.status(401).json({
        error: "invalid username or password",
      });
    }

    /**
     * If the password is correct then from here we are generating token using username and user id and a secret code coming from env file.
     */
    const userForToken = {
      username: user.username,
      id: user._id,
    };

    const token = jwt.sign(userForToken, process.env.SECRET);

    res.status(200).send({
      token: token,
      username: user.username,
      name: user.name,
    });
  } catch (error) {
    console.log("errorlalala", error);
  }
});

module.exports = loginRouter;
