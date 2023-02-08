const blogsRouter = require("express").Router();
const Blog = require("../models/blog");

blogsRouter.get("/api/blogs", (request, response, next) => {
  Blog.find({})
    .then((blogs) => {
      response.json(blogs);
    })
    .catch((error) => next(error));
});

blogsRouter.post("/api/blogs", (request, response, next) => {
  const body = request.body;
  const blog = new Blog({
    title: body.title,
    image: body.image,
    category: body.category,
    desc: body.desc,
  });

  blog
    .save()
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((error) => next(error));
});

module.exports = blogsRouter;
