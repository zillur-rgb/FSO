import { useRef } from "react";
import blogService from "../services/blogs";

const CreateNew = ({ setBlogs, blogs }: any) => {
  const formRef = useRef<HTMLFormElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const categoriesRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);

  const handler = async (e: any) => {
    e.preventDefault();
    try {
      const newBlog = {
        title: titleRef.current?.value,
        image: imageRef.current?.value,
        categories: categoriesRef.current?.value.split(" ,"),
        desc: descRef.current?.value,
      };

      const blog = await blogService.createNewBlog(newBlog);
      await setBlogs(blogs.concat(blog));
      formRef.current?.reset();
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <>
      <h3>Create new blog!</h3>
      <form ref={formRef} onSubmit={handler}>
        <input
          ref={titleRef}
          name="title"
          type={"text"}
          placeholder="Write your title here"
        />
        <input
          ref={imageRef}
          name="image"
          type={"text"}
          placeholder="Write your image url here."
        />
        <input
          ref={categoriesRef}
          name="categories"
          type={"text"}
          placeholder="Write your categories separated by comma here."
        />
        <input
          ref={descRef}
          name="description"
          type={"text"}
          placeholder="Write your description here."
        />
        <button>Login</button>
      </form>
    </>
  );
};

export default CreateNew;
