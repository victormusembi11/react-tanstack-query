import { useReducer, createContext } from "react";

import { PostsReducer } from "../reducers/PostsReducer";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PostsReducer, []);

  return (
    <PostsContext.Provider value={{ state, dispatch }}>
      {children}
    </PostsContext.Provider>
  );
};
