import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import { PostsContext } from "../contexts/PostsContext";
import { fetchPosts } from "../api/posts";

export default function PostsList() {
  const { state } = useContext(PostsContext);
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <h1>Posts from context</h1>
      <ul>
        {state.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
