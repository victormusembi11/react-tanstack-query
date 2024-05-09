export function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export const POSTS = [
  {
    id: 1,
    title: "Post 1",
  },
  {
    id: 2,
    title: "Post 2",
  },
];
