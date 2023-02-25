import { useState } from "react";
import updateService from "../services/blogs";

export interface BlogType {
  title: string;
  desc: string;
  likes: number;
  id: string;
  setBlogs: any;
  blogs: any;
}

const Blog = ({ title, desc, likes, id, blogs, setBlogs }: BlogType) => {
  const [viewDesc, setViewDesc] = useState<boolean>(false);
  const [like, setLikes] = useState<number>(likes);

  const blogStyle: {
    paddingTop: number;
    paddingLeft: number;
    border: string;
    borderWidth: number;
    marginBottom: number;
  } = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  const increaseLike = async (id: string) => {
    const updatedLike = {
      likes: likes + 1,
    };

    await updateService.updateBlog(id, updatedLike);

    setBlogs(
      blogs.map((blog: any) =>
        blog.id !== id
          ? blog
          : {
              ...blog,
              likes: likes + 1,
            }
      )
    );
  };

  return (
    <div key={desc} style={blogStyle}>
      <h3>{title}</h3>
      <button onClick={() => setViewDesc(!viewDesc)}>
        {viewDesc ? "hide" : "show"} description
      </button>
      {viewDesc && (
        <>
          <p>{desc}</p>
          <button onClick={() => increaseLike(id)}>like</button> {likes}
        </>
      )}
    </div>
  );
};

export default Blog;
