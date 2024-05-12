export const POSTS_ACTIONS = {
  SET_POSTS: "SET_POSTS",
  ADD_POST: "ADD_POST",
};

export const PostsReducer = (state, action) => {
  switch (action.type) {
    case POSTS_ACTIONS.SET_POSTS:
      return action.payload;
    case POSTS_ACTIONS.ADD_POST:
      return [...state, action.payload];
    default:
      return state;
  }
};
