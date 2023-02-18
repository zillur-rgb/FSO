/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import blogService from "../src/services/blogs";
import Blog, { BlogType } from "./components/Blog";

function App() {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  console.log("Blogs:", blogs);

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);
  return (
    <>
      <h2>Blogs</h2>
      {blogs.map((blog) => (
        <Blog title={blog.title} desc={blog.desc} />
      ))}
    </>
  );
}

export default App;
