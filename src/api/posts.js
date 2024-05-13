import axios from "axios";

const createPost = async (newPost) => {
  const { data } = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    newPost
  );
  return data;
};

const fetchPosts = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

const fetchPost = async (postId) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return data;
};

const updatePost = async (updatedPost) => {
  const { data } = await axios.put(
    `https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`,
    updatedPost
  );
  return data;
};

const deletePost = async (postId) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
};

export { fetchPosts, fetchPost, createPost, updatePost, deletePost };
