/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import blogService from "../src/services/blogs";
import Blog, { BlogType } from "./components/Blog";
import CreateNew from "./components/CreateNew";
import LoginForm from "./components/LoginForm";

function App() {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [user, setUser] = useState<any>();

  console.log("User", user?.token);

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogAppUser");
    if (loggedUserJSON) {
      const userData = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(userData?.token);
    }
  }, []);
  return (
    <>
      {!user && <LoginForm setUser={setUser} user={user} />}
      {user && (
        <>
          <h2>Hey {user.name}, welcome to our app!</h2>
          <button
            onClick={() => {
              window.localStorage.removeItem("user");
              setUser(null);
            }}
          >
            Logout
          </button>
          <CreateNew blogs={blogs} setBlogs={setBlogs} />
          <h2>Blogs</h2>
          {blogs?.map((blog) => (
            <Blog key={blog.desc} title={blog.title} desc={blog.desc} />
          ))}
        </>
      )}
    </>
  );
}

export default App;
