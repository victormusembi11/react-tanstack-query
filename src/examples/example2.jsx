import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { fetchTodos, addTodo } from "../api";

export default function Example2() {
  const queryClient = useQueryClient();
  const [text, setText] = useState("");
  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetchTodos(),
    staleTime: Infinity, // cache never expires
    cacheTime: 0, // cache never revalidates
    refetchInterval: false, // disable polling
  });

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
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
      <div>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button
          onClick={async () => {
            try {
              await addTodoMutation(text);
              setText("");
            } catch (error) {
              console.error(error);
            }
          }}
        >
          Add Todo
        </button>
      </div>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            {todo.text} -{" "}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => console.log("update todo")}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
