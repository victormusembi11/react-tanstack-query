import { useState } from "react";

// import Example1 from "./examples/example1";
import Example2 from "./examples/example2";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      {/* <Example1 /> */}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <Example2 />}
    </div>
  );
}

export default App;
