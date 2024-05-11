import { useQuery } from "@tanstack/react-query";

import { fetchTodos } from "../api";

export default function Example2() {
  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetchTodos(),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos?.map((todo) => (
          <>
            <li key={todo.id}>
              {todo.text} - <input type="checkbox" checked={todo.completed} />
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
