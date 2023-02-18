/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import blogService from "../src/services/blogs";
import Blog, { BlogType } from "./components/Blog";
import LoginForm from "./components/LoginForm";

function App() {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [user, setUser] = useState<any>();

  console.log("user: ", user);

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);
  return (
    <>
      <LoginForm setUser={setUser} user={user} />
      {user && (
        <>
          <h2>Hey {user.name}, welcome to our app!</h2>
          <h2>Blogs</h2>
          {blogs.map((blog) => (
            <Blog title={blog.title} desc={blog.desc} />
          ))}
        </>
      )}
    </>
  );
}

export default App;
