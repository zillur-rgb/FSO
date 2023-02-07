const http = require("http");
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  category: [String],
  desc: String,
  createdAt: Date,
});

const Blog = mongoose.model("Blog", blogSchema);

const mongoUrl = process.env.MONGODB_URI;
mongoose.connect(mongoUrl);
mongoose.set("strictQuery", true);

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
    createdAt: new Date(),
  });

  blog.save().then((result) => {
    response.status(201).json(result);
  });
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
