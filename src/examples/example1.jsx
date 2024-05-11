import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { wait, POSTS } from "../utils";

function Example1() {
  const queryClient = useQueryClient();

  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });

  const newPostMutation = useMutation({
    mutationFn: (title) => {
      return wait(1000).then(() => POSTS.push({ id: POSTS.length + 1, title }));
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  if (postsQuery.isLoading) return <>Loading...</>;

  if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>;

  return (
    <>
      {postsQuery.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}

      <button
        disabled={newPostMutation.isLoading}
        onClick={() => newPostMutation.mutate("New Post")}
      >
        Add New
      </button>
    </>
  );
}

export default Example1;
