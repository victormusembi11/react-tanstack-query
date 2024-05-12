import { useState } from "react";

// import Example1 from "./examples/example1";
import Example2 from "./examples/example2";
import { PostsProvider } from "./contexts/PostsContext";
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";

function App({ queryClient }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      {/* <Example1 /> */}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <Example2 />}
      <PostsProvider>
        <PostForm queryClient={queryClient} />
        <PostsList />
      </PostsProvider>
    </div>
  );
}

export default App;
