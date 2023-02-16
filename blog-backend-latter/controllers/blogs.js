const jwt = require("jsonwebtoken");
const blogsRouter = require("express").Router();
const Blog = require("../models/blog");
const User = require("../models/user");

blogsRouter.get("/", (request, response, next) => {
  Blog.find({})
    .populate("user", {
      username: 1,
      name: 1,
      id: 1,
    })
    .then((blogs) => {
      response.json(blogs);
    })
    .catch((error) => next(error));
});

/**
 * This helper function isolates token from
 * the authorization header
 */
// const getTokenFrom = (req) => {
//   const authorization = req.get("authorization");
//   if (authorization && authorization.startsWith("Bearer ")) {
//     return authorization.replace("Bearer ", "");
//   }
//   return null;
// };

blogsRouter.post("/", (request, response, next) => {
  const body = request.body;

  if (!decodedToken.id) {
    return response.status(401).json({
      error: "token invalid",
    });
  }

  const user = User.findById(decodedToken.id);
  const blog = new Blog({
    title: body.title,
    image: body.image,
    category: body.category,
    desc: body.desc,
    user: user._id,
  });

  blog
    .save()
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((error) => next(error));
});

module.exports = blogsRouter;
