const bcrypt = require("bcrypt");

const usersRouter = require("express").Router();
const User = require("../models/user");

usersRouter.post("/", async (req, res, next) => {
  try {
    const { username, name, password } = req.body;

    if (!password && !password.length > 3) {
      return res.status(400).json({
        error: "Password must be at least 3 characters long.",
      });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
      username,
      name,
      passwordHash,
    });

    const savedUser = await user.save();

    res.status(201).json(savedUser);
  } catch (error) {
    // console.log("errorllalal", error);
    next(error.name);
  }
});
usersRouter.get("/", async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

usersRouter.delete("/:id", async (req, res, next) => {
  const id = req.params.id;

  const deletedId = await User.findByIdAndDelete(id);
  res.status(204).end();
});

module.exports = usersRouter;
