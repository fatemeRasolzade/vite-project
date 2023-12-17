import { useState } from "react";
import "./App.css";

function App() {
  const initialState = 0;
  const [count, setCount] = useState(initialState);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increase</button>
      <button onClick={() => setCount(initialState)}>Reset</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
    </>
  );
}

export default App;
