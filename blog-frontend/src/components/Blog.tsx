export interface BlogType {
  title: string;
  desc: string;
}

const Blog = ({ title, desc }: BlogType) => (
  <div key={desc}>
    {title} {desc}
  </div>
);

export default Blog;
