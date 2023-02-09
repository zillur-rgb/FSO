const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((total, blog) => {
    return total + blog.likes;
  }, 0);
};

const mostLikedBlog = (blogs) => {
  const ordered = blogs.sort((a, b) => (a.likes > b.likes ? -1 : 1));
  return ordered[0];
};

module.exports = {
  dummy,
  totalLikes,
  mostLikedBlog,
};
