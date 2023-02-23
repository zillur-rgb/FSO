import { useState } from "react";

export interface BlogType {
  title: string;
  desc: string;
}

const Blog = ({ title, desc }: BlogType) => {
  const [viewDesc, setViewDesc] = useState<boolean>(false);

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

  return (
    <div key={desc} style={blogStyle}>
      <h3>{title}</h3>
      <button onClick={() => setViewDesc(!viewDesc)}>
        {viewDesc ? "hide" : "show"} description
      </button>
      {viewDesc && <p>{desc}</p>}
    </div>
  );
};

export default Blog;
