const posts = [
  { id: 1, title: 'First Post', content: 'This is the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the second post.' },
]

const getAllPosts = () => posts;

export const getPostLenght = () => posts.length;

export default getAllPosts;

// export { getAllPosts };