/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import blogService from "../src/services/blogs";
import Blog, { BlogType } from "./components/Blog";
import LoginForm from "./components/LoginForm";

function App() {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const loggedUser = window.localStorage.getItem("user");

    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      setUser(user);
    }
  }, []);

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);
  return (
    <>
      <LoginForm setUser={setUser} user={user} />
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
