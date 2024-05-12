import { useContext } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  Alert,
  AlertIcon,
  Spinner,
} from "@chakra-ui/react";

import { POSTS_ACTIONS } from "../reducers/PostsReducer";
import { PostsContext } from "../contexts/PostsContext";

const createPost = async (newPost) => {
  const { data } = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    newPost
  );
  return data;
};

export default function PostForm({ queryClient }) {
  const { dispatch } = useContext(PostsContext);
  const { isLoading, isError, error, mutateAsync } = useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      dispatch({ type: POSTS_ACTIONS.ADD_POST, payload: data });
      queryClient.invalidateQueries(["posts"]);
    },
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
      userId: 1,
    },
    onSubmit: async (values) => {
      await mutateAsync(values);
      formik.resetForm();
    },
  });

  return (
    <Box w="50em" m="2em">
      <form onSubmit={formik.handleSubmit}>
        <FormControl id="title">
          <FormLabel>Title</FormLabel>
          <Input
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </FormControl>
        <FormControl id="body">
          <FormLabel>Body</FormLabel>
          <Input
            name="body"
            onChange={formik.handleChange}
            value={formik.values.body}
          />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit" isLoading={isLoading}>
          {isLoading ? <Spinner size="sm" /> : "Submit"}
        </Button>
      </form>
      {isError && (
        <Alert status="error" mt={4}>
          <AlertIcon />
          {error.message}
        </Alert>
      )}
    </Box>
  );
}
