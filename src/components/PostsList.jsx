import { useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Flex,
  Heading,
  Alert,
  AlertIcon,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

import { PostsContext } from "../contexts/PostsContext";
import { fetchPosts } from "../api/posts";
import { POSTS_ACTIONS } from "../reducers/PostsReducer";

export default function PostsList() {
  const { state, dispatch } = useContext(PostsContext);
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  useEffect(() => {
    if (posts) {
      dispatch({ type: POSTS_ACTIONS.SET_POSTS, payload: posts });
    }
  }, [posts, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <Alert status="error">
        <AlertIcon />
        {error.message}
      </Alert>
    );
  }

  return (
    <Flex m="2em">
      <Flex flexDirection="column">
        <Heading>Posts from API</Heading>
        <UnorderedList>
          {posts.map((post) => (
            <ListItem key={post.id}>{post.title}</ListItem>
          ))}
        </UnorderedList>
      </Flex>
      <Flex flexDirection="column">
        <Heading>Posts from Context</Heading>
        <UnorderedList>
          {state.map((post, index) => (
            <ListItem key={index}>{post.title}</ListItem>
          ))}
        </UnorderedList>
      </Flex>
    </Flex>
  );
}
