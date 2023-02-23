/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import blogService from "../src/services/blogs";
import Blog, { BlogType } from "./components/Blog";
import CreateNew from "./components/CreateNew";
import LoginForm from "./components/LoginForm";
import Notifications, { NotificationsType } from "./components/Notifications";
import Togglable from "./components/Togglable";

function App() {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [user, setUser] = useState<any>();
  const [alert, setAlert] = useState<NotificationsType | undefined>();

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
          {alert && <Notifications type={alert.type} desc={alert?.desc} />}
          <Togglable btnLabel="Write a Blog">
            <CreateNew blogs={blogs} setBlogs={setBlogs} setAlert={setAlert} />
          </Togglable>
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
