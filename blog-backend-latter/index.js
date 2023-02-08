const http = require("http");
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const Blog = require("./models/blog");

app.use(cors());
app.use(express.json());

app.get("/api/blogs", (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});

app.post("/api/blogs", (request, response) => {
  const body = request.body;
  const blog = new Blog({
    title: body.title,
    image: body.image,
    category: body.category,
    desc: body.desc,
  });

  blog.save().then((result) => {
    response.status(201).json(result);
  });
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
