const jwt = require("jsonwebtoken");
const blogsRouter = require("express").Router();
const Blog = require("../models/blog");
const User = require("../models/user");

blogsRouter.get("/", (request, response, next) => {
  Blog.find({})
    .populate("user")
    .then((blogs) => {
      response.json(blogs);
    })
    .catch((error) => next(error));
});

/**
 * This helper function isolates token from
 * the authorization header
 */
const getTokenFrom = (req) => {
  const authorization = req.get("authorization");
  if (authorization && authorization.startsWith("Bearer ")) {
    return authorization.replace("Bearer ", "");
  }
  return null;
};

blogsRouter.post("/", async (request, response, next) => {
  const body = request.body;
  const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET);

  if (!decodedToken.id) {
    return response.status(401).json({
      error: "token invalid",
    });
  }

  const user = await User.findById(decodedToken.id);

  const blog = new Blog({
    title: body.title,
    image: body.image,
    category: body.category,
    desc: body.desc,
    likes: body.likes ? body.likes : 0,
    user: user._id,
  });
  const savedBlog = await blog.save();
  user.blogs = user.blogs.concat(savedBlog._id);
  await user.save();

  response.json(savedBlog);
});

blogsRouter.put("/:id", (req, res, next) => {
  const body = req.body;
  const decodedToken = jwt.verify(getTokenFrom(req), process.env.SECRET);

  if (!decodedToken.id) {
    return response.status(401).json({
      error: "token invalid",
    });
  }

  const user = User.findById(decodedToken.id);
  const blog = {
    title: body.title,
    image: body.image,
    category: body.category,
    desc: body.desc,
    likes: body.likes,
  };

  Blog.findByIdAndUpdate(req.params.id, blog, { new: true })
    .then((updatedBlog) => res.json(updatedBlog))
    .catch((err) => next(err));
});

blogsRouter.get("/:id", async (request, response) => {
  const blog = await Blog.findById(request.params.id);
  if (blog) {
    response.json(blog);
  } else {
    response.status(404).end();
  }
});

blogsRouter.delete("/:id", async (req, res, next) => {
  await Blog.findByIdAndRemove(req.params.id);
  res.status(204).end();
});

module.exports = blogsRouter;
