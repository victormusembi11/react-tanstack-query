const todos = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Buy eggs", completed: false },
  { id: 3, text: "Buy bread", completed: false },
  { id: 4, text: "Buy butter", completed: false },
  { id: 5, text: "Buy cheese", completed: false },
];

export const fetchTodos = async (query = "") => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("fetched todos");

  const filteredTodos = todos.filter((todo) => todo.text.includes(query));

  return [...filteredTodos];
};

export const addTodo = async (todo) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newTodo = { id: todos.length + 1, text: todo, completed: false };

  todos.push(newTodo);

  console.log("added todo");

  return newTodo;
};
