import { useQuery } from "@tanstack/react-query";

import { wait, POSTS } from "./utils";

function App() {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });

  if (postsQuery.isLoading) return <>Loading...</>;

  if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>;

  return (
    <>
      {postsQuery.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </>
  );
}

export default App;
